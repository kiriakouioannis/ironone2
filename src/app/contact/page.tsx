import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

const ContactPage = () => {
  return (
    <>
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-24 sm:py-32">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
        <div className="container relative mx-auto px-6 text-center">
          <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 mb-6">
            <MessageCircle className="h-4 w-4 text-blue-600 mr-2" />
            <p className="text-sm font-semibold text-blue-700">Επικοινωνήστε μαζί μας</p>
          </div>
          <h1 className="mt-2 text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl leading-tight">
            Ας μιλήσουμε για τις ανάγκες του καταλύματός σας 
          </h1>
          <p className="mt-8 max-w-2xl mx-auto text-xl leading-8 text-gray-600">
            Έχετε ερωτήσεις; Θέλετε μια προσαρμοσμένη προσφορά; Είμαστε εδώ για να σας βοηθήσουμε να αξιοποιήσετε στο έπακρο τις υπηρεσίες της IronOne.
          </p>
        </div>
      </section>

      {/* 2. Contact Information Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 -mt-16">
            {/* Email Card */}
            <div className="relative bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 mb-4">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Στείλτε μας email</h3>
              <a href="mailto:hello@ironone.gr" className="text-blue-600 hover:text-blue-700 transition-colors">
                hello@ironone.gr
              </a>
            </div>

            {/* Phone Card */}
            <div className="relative bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 mb-4">
                <Phone className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Καλέστε μας</h3>
              <a href="tel:211 8000717" className="text-purple-600 hover:text-purple-700 transition-colors">
                +1 (555) 123-4567
              </a>
            </div>

            {/* Location Card */}
            <div className="relative bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-100 mb-4">
                <MapPin className="h-6 w-6 text-pink-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Τοποθεσία</h3>
                              <p className="text-gray-600">
                              Αθήνα - Νομός Αττικής
                                Υπόλοιπη Ελλάδα (κατόπιν επικοινωνίας)
                            </p>            </div>

            {/* Hours Card */}
            <div className="relative bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 mb-4">
                <Clock className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Ώρες Λειτουργίας</h3>
              <p className="text-gray-600">
                Δευ-Σαβ: 9πμ-6μμ<br />
                Κυρ: -
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Contact Form Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
                Στείλτε μας ένα μήνυμα
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Συμπληρώστε την παρακάτω φόρμα και θα επικοινωνήσουμε μαζί σας άμεσα.
              </p>

              <div className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                    Το Όνομά σας
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    Διεύθυνση Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Phone Input */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                    Αριθμός Τηλεφώνου
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                {/* Subject Input */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                    Θέμα
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all"
                    placeholder="Πώς μπορούμε να σας βοηθήσουμε;"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                    Μήνυμα
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all resize-none"
                      placeholder="Πείτε μας περισσότερα για τις ανάγκες σας..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4 text-lg font-semibold text-white shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105"
                >
                  <Send className="h-5 w-5" />
                  Αποστολή Μηνύματος
                </button>
              </div>
            </div>

            {/* Right Column - Additional Info */}
            <div className="lg:pl-8">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-10 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Γιατί να επιλέξετε την IronOne;
                </h3>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                        <Clock className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">Γρήγορη Παράδοση</h4>
                      <p className="text-gray-600">Υπηρεσία άμεσης παραλαβής - παράδοσης.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600">
                        <Mail className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">Ποιότητα Υπηρεσιών σε πρότυπα Ξενοδοχείου</h4>
                      <p className="text-gray-600">Επαγγελματικές υπηρεσίες που θα σας διαφοροποιήσουν από τον ανταγωνισμό.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-pink-600">
                        <Phone className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">Υποστήριξη</h4>
                      <p className="text-gray-600">Η ομάδα μας είναι πάντα έτοιμη να σας βοηθήσει δίνοντας λύσεις στις ανάγκες σας.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-gray-200">
                  <p className="text-sm text-gray-600 mb-4">
                    Χρειάζεστε άμεση βοήθεια;
                  </p>
                  <a
                    href="tel:+15551234567"
                    className="inline-flex items-center gap-2 text-lg font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                     211 8000717
                  </a>
                </div>
              </div>

              {/* FAQ Prompt */}
              <div className="mt-8 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Έχετε μια γρήγορη ερώτηση;
                </h3>
                <p className="text-gray-600 mb-6">
                  Δείτε τις συχνές ερωτήσεις μας για να λάβετε γρήγορα τις απαντήσεις.
                </p>
                <a
                  href="/services#faq"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                >
                  Δείτε τις Συχνές Ερωτήσεις
                  <span className="ml-2">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Map Section (Optional) */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <p className="text-xl font-semibold text-gray-700">Χάρτης Περιοχής Εξυπηρέτησης</p>
                <p className="text-gray-500 mt-2">Χώρα</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            Έτοιμοι να ζήσετε την εμπειρία της IronΟne;
          </h2>
          <p className="mt-6 text-xl text-white/90 max-w-2xl mx-auto">
            Κλείστε την πρώτη σας παραλαβή σήμερα και ανακαλύψτε γιατί οι οικοδεσπότες λατρεύουν τις υπηρεσίες μας.
          </p>
          <div className="mt-10">
            <a
              href="/booking"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-purple-600 shadow-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              Κλείστε την Πρώτη σας Παραλαβή
              <span>→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};


export default ContactPage;

