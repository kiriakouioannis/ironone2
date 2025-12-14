"use client"
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Clock, User, Mail, Phone, Home, Check } from 'lucide-react';
import { BookingPageData } from '@/sanity/lib/queries';

export default function BookingClientPage({ data }: { data: BookingPageData }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [bookingStep, setBookingStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    service: data?.formStep?.serviceTypes?.[0]?.value || 'linen-wash',
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

  const selectDate = (day: number) => {
    const selected = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (selected >= today) {
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
      const response = await fetch('/api/bookings', {
        method: 'POST',
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
        throw new Error(responseData.error || 'Failed to submit booking');
      }

      setBookingStep(4);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Failed to submit booking. Please try again.');
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-3">{data?.title || 'Schedule Your Service'}</h1>
          <p className="text-slate-600 text-lg">{data?.subtitle || 'Personalized washing and ironing services for your Airbnb'}</p>
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
                    disabled={isPastDate(day)}
                    className={`aspect-square rounded-lg font-medium transition-all ${
                      isPastDate(day)
                        ? 'text-slate-300 cursor-not-allowed'
                        : isToday(day)
                        ? 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                        : 'hover:bg-blue-50 text-slate-700 border border-slate-200 hover:border-blue-300'
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>
          )}

          {bookingStep === 2 && (
            <div>
              <button
                onClick={() => setBookingStep(1)}
                className="mb-4 text-blue-600 hover:text-blue-700 flex items-center"
              >
                <ChevronLeft className="w-4 h-4" /> {data?.timeStep?.backButtonText || 'Back to Calendar'}
              </button>
              
              <div className="mb-6">
                <div className="flex items-center text-slate-600 mb-2">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span className="font-medium">{formatDate(selectedDate)}</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-800">{data?.timeStep?.title || 'Select a Time'}</h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {availableHours.map(time => (
                  <button
                    key={time}
                    onClick={() => selectTime(time)}
                    className="p-4 border-2 border-slate-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all text-slate-700 font-medium"
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
                <ChevronLeft className="w-4 h-4" /> {data?.formStep?.backButtonText || 'Back to Time Selection'}
              </button>

              <div className="mb-6">
                <h2 className="text-2xl font-bold text-slate-800 mb-2">{data?.formStep?.title || 'Your Information'}</h2>
                <p className="text-slate-600">
                  {formatDate(selectedDate)} at {selectedTime}
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    {data?.formStep?.nameLabel || 'Full Name'}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900"
                    placeholder={data?.formStep?.namePlaceholder || 'John Doe'}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    {data?.formStep?.emailLabel || 'Email Address'}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900"
                    placeholder={data?.formStep?.emailPlaceholder || 'john@example.com'}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    <Phone className="w-4 h-4 inline mr-2" />
                    {data?.formStep?.phoneLabel || 'Phone Number'}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900"
                    placeholder={data?.formStep?.phonePlaceholder || '+1 123 456 7890'}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    <Home className="w-4 h-4 inline mr-2" />
                    {data?.formStep?.addressLabel || 'Full Address'}
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900"
                    placeholder={data?.formStep?.addressPlaceholder || '123 Main St, City, Country'}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    {data?.formStep?.serviceTypeLabel || 'Service Type'}
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900"
                  >
                    {data?.formStep?.serviceTypes?.map(service => (
                      <option key={service.value} value={service.value}>{service.title}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    {data?.formStep?.notesLabel || 'Additional Notes'}
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder={data?.formStep?.notesPlaceholder || 'Any special requests or details...'}
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
                  {isSubmitting ? (data?.formStep?.submittingButtonText || 'Submitting...') : (data?.formStep?.submitButtonText || 'Confirm Appointment')}
                </button>
              </div>
            </div>
          )}

          {bookingStep === 4 && (
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-800 mb-4">{data?.confirmationStep?.title || 'Appointment Confirmed!'}</h2>
              <p className="text-slate-600 mb-6">
                {data?.confirmationStep?.message?.replace('{email}', formData.email) || `Thank you for choosing us. We will send a confirmation email to ${formData.email}.`}
              </p>
              <div className="bg-blue-50 rounded-lg p-6 mb-6 text-left max-w-md mx-auto">
                  <h3 className="font-semibold text-slate-800 mb-3">{data?.confirmationStep?.detailsTitle || 'Appointment Details:'}</h3>
                <p className="text-slate-600 mb-2"><strong>{data?.confirmationStep?.dateLabel || 'Date:'}</strong> {formatDate(selectedDate)}</p>
                <p className="text-slate-600 mb-2"><strong>{data?.confirmationStep?.timeLabel || 'Time:'}</strong> {selectedTime}</p>
                <p className="text-slate-600 mb-2"><strong>{data?.confirmationStep?.serviceLabel || 'Service:'}</strong> {formData.service.replace('-', ' ')}</p>
                <p className="text-slate-600"><strong>{data?.confirmationStep?.addressLabel || 'Address:'}</strong> {formData.address}</p>
              </div>
              <button
                onClick={() => {
                  setBookingStep(1);
                  setSelectedDate(null);
                  setSelectedTime(null);
                  setFormData({
                    name: '', email: '', phone: '', address: '', service: data?.formStep?.serviceTypes?.[0]?.value || 'linen-wash', notes: ''
                  });
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                {data?.confirmationStep?.newAppointmentButtonText || 'Make Another Appointment'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}