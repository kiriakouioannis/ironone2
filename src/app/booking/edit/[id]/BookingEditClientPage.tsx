"use client"
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Clock, User, Mail, Phone, Home, Check, Loader2 } from 'lucide-react';
import { BookingPageData } from '@/sanity/lib/queries';

interface Booking {
  _id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  service: string;
  date: string;
  time: string;
  notes: string;
  status: string;
}

export default function BookingEditClientPage({
  data,
  bookingId
}: {
  data: BookingPageData;
  bookingId: string;
}) {
  const [booking, setBooking] = useState<Booking | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [bookingStep, setBookingStep] = useState(1);
  const [blockedDates, setBlockedDates] = useState<string[]>([]);

  // Fetch blocked dates from API
  useEffect(() => {
    const fetchBlockedDates = async () => {
      try {
        const response = await fetch('/api/availability');
        const data = await response.json();
        setBlockedDates(data.blockedDates || []);
      } catch (error) {
        console.error('Error fetching blocked dates:', error);
      }
    };

    fetchBlockedDates();
  }, []);

  // Fetch existing booking
  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const response = await fetch(`/api/bookings/${bookingId}`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Failed to load booking');
        }

        const bookingData = data.booking;
        setBooking(bookingData);

        // Pre-populate form data
        const bookingDate = new Date(bookingData.date);
        setSelectedDate(bookingDate);
        setSelectedTime(bookingData.time);
        setCurrentDate(bookingDate);

        setFormData({
          name: bookingData.name,
          email: bookingData.email,
          phone: bookingData.phone,
          address: bookingData.address,
          service: bookingData.service,
          notes: bookingData.notes || ''
        });

        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load booking');
        setLoading(false);
      }
    };

    fetchBooking();
  }, [bookingId]);

  // Fallback service types if not defined in Sanity
  const defaultServiceTypes = [
    { title: 'Linen Wash', value: 'linen-wash' },
    { title: 'Ironing Service', value: 'ironing' },
    { title: 'Wash & Ironing', value: 'both' }
  ];

  const serviceTypes = data?.formStep?.serviceTypes && data.formStep.serviceTypes.length > 0
    ? data.formStep.serviceTypes
    : defaultServiceTypes;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    service: serviceTypes[0]?.value || 'linen-wash',
    notes: ''
  });

  const availableHours = data?.timeStep?.availableHours || [
    '09:00', '10:00', '11:00', '12:00',
    '13:00', '14:00', '15:00', '16:00', '17:00'
  ];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    return { daysInMonth, startingDayOfWeek };
  };

  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentDate);

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const isDateBlocked = (day: number) => {
    const checkDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    const dateString = checkDate.toISOString().split('T')[0];
    return blockedDates.includes(dateString);
  };

  const selectDate = (day: number) => {
    const selected = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Check if date is not in the past and not blocked
    if (selected >= today && !isDateBlocked(day)) {
      setSelectedDate(selected);
      setBookingStep(2);
    }
  };

  const selectTime = (time: string) => {
    setSelectedTime(time);
    setBookingStep(3);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.address) {
      setSubmitError(data?.formStep?.errorMessage || 'Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch(`/api/bookings/${bookingId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          date: selectedDate?.toISOString(),
          time: selectedTime,
        }),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.error || 'Failed to update booking');
      }

      setBookingStep(4);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Failed to update booking. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatDate = (date: Date | null) => {
    if (!date) return '';
    return date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  };

  const monthNames = data?.calendarStep?.monthNames || ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
  const dayNames = data?.calendarStep?.dayNames || ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const isToday = (day: number) => {
    const today = new Date();
    return today.getDate() === day &&
           today.getMonth() === currentDate.getMonth() &&
           today.getFullYear() === currentDate.getFullYear();
  };

  const isPastDate = (day: number) => {
    const checkDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return checkDate < today;
  };

  const isUnavailable = (day: number) => {
    return isPastDate(day) || isDateBlocked(day);
  };

  const isSelectedDate = (day: number) => {
    if (!selectedDate) return false;
    return selectedDate.getDate() === day &&
           selectedDate.getMonth() === currentDate.getMonth() &&
           selectedDate.getFullYear() === currentDate.getFullYear();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4" />
          <p className="text-slate-600">Loading booking...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-red-600 text-2xl">✕</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Error Loading Booking</h2>
          <p className="text-slate-600 mb-6">{error}</p>
          <a
            href="/booking"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Back to Booking
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-3">Edit Your Appointment</h1>
          <p className="text-slate-600 text-lg">Update your booking details</p>
        </div>

        <div className="flex justify-center items-center mb-8 space-x-2">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                bookingStep >= step
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-slate-400 border-2 border-slate-200'
              }`}>
                {bookingStep > step ? <Check className="w-5 h-5" /> : step}
              </div>
              {step < 3 && (
                <div className={`w-12 md:w-24 h-1 ${bookingStep > step ? 'bg-blue-600' : 'bg-slate-200'}`} />
              )}
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          {bookingStep === 1 && (
            <div>
              <div className="mb-4 text-sm text-slate-600 bg-blue-50 p-3 rounded-lg">
                Current appointment: <strong>{formatDate(selectedDate)}</strong> at <strong>{selectedTime}</strong>
              </div>

              <div className="flex items-center justify-between mb-6">
                <button
                  onClick={previousMonth}
                  className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  <ChevronLeft className="w-6 h-6 text-slate-600" />
                </button>
                <h2 className="text-2xl font-bold text-slate-800">
                  {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                </h2>
                <button
                  onClick={nextMonth}
                  className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  <ChevronRight className="w-6 h-6 text-slate-600" />
                </button>
              </div>

              <div className="grid grid-cols-7 gap-2 mb-2">
                {dayNames.map(day => (
                  <div key={day} className="text-center font-semibold text-slate-500 py-2">
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-2">
                {Array.from({ length: startingDayOfWeek }, (_, i) => (
                  <div key={`empty-${i}`} className="aspect-square" />
                ))}
                {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(day => (
                  <button
                    key={day}
                    onClick={() => selectDate(day)}
                    disabled={isUnavailable(day)}
                    className={`aspect-square rounded-lg font-medium transition-all ${
                      isUnavailable(day)
                        ? 'text-slate-300 cursor-not-allowed bg-slate-50'
                        : isSelectedDate(day)
                        ? 'bg-blue-600 text-white ring-2 ring-blue-400 ring-offset-2'
                        : isToday(day)
                        ? 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                        : 'hover:bg-blue-50 text-slate-700 border border-slate-200 hover:border-blue-300'
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>

              <div className="mt-6 flex justify-between items-center">
                <a
                  href="/booking"
                  className="text-slate-600 hover:text-slate-700 flex items-center"
                >
                  <ChevronLeft className="w-4 h-4" /> Cancel
                </a>
                <button
                  onClick={() => setBookingStep(2)}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  Next: Select Time
                </button>
              </div>
            </div>
          )}

          {bookingStep === 2 && (
            <div>
              <button
                onClick={() => setBookingStep(1)}
                className="mb-4 text-blue-600 hover:text-blue-700 flex items-center"
              >
                <ChevronLeft className="w-4 h-4" /> Back to Calendar
              </button>

              <div className="mb-6">
                <div className="flex items-center text-slate-600 mb-2">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span className="font-medium">{formatDate(selectedDate)}</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-800">Select a Time</h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {availableHours.map(time => (
                  <button
                    key={time}
                    onClick={() => selectTime(time)}
                    className={`p-4 border-2 rounded-lg transition-all font-medium ${
                      selectedTime === time
                        ? 'border-blue-600 bg-blue-50 text-blue-700'
                        : 'border-slate-200 hover:border-blue-500 hover:bg-blue-50 text-slate-700'
                    }`}
                  >
                    <Clock className="w-5 h-5 inline mr-2" />
                    {time}
                  </button>
                ))}
              </div>
            </div>
          )}

          {bookingStep === 3 && (
            <div>
              <button
                onClick={() => setBookingStep(2)}
                className="mb-4 text-blue-600 hover:text-blue-700 flex items-center"
              >
                <ChevronLeft className="w-4 h-4" /> Back to Time Selection
              </button>

              <div className="mb-6">
                <h2 className="text-2xl font-bold text-slate-800 mb-2">Confirm Your Updates</h2>
                <p className="text-slate-600">
                  {formatDate(selectedDate)} at {selectedTime}
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    <Phone className="w-4 h-4 inline mr-2" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    <Home className="w-4 h-4 inline mr-2" />
                    Full Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Service Type
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900"
                  >
                    {serviceTypes.map(service => (
                      <option key={service.value} value={service.value}>{service.title}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Any special requests or details..."
                  />
                </div>

                {submitError && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                    {submitError}
                  </div>
                )}

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-lg transition-colors"
                >
                  {isSubmitting ? 'Updating...' : 'Update Appointment'}
                </button>
              </div>
            </div>
          )}

          {bookingStep === 4 && (
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Appointment Updated!</h2>
              <p className="text-slate-600 mb-6">
                Your appointment has been successfully updated. A confirmation email has been sent to {formData.email}.
              </p>
              <div className="bg-blue-50 rounded-lg p-6 mb-6 text-left max-w-md mx-auto">
                <h3 className="font-semibold text-slate-800 mb-3">Updated Appointment Details:</h3>
                <p className="text-slate-600 mb-2"><strong>Date:</strong> {formatDate(selectedDate)}</p>
                <p className="text-slate-600 mb-2"><strong>Time:</strong> {selectedTime}</p>
                <p className="text-slate-600 mb-2"><strong>Service:</strong> {formData.service.replace('-', ' ')}</p>
                <p className="text-slate-600"><strong>Address:</strong> {formData.address}</p>
              </div>
              <a
                href="/booking"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Back to Booking
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
