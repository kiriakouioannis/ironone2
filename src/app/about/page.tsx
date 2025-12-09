import { Target, Heart, Sparkles, CheckCircle, Clock, Award, Users, Zap } from 'lucide-react';

const AboutPage = () => {
  return (
    <>
      {/* 1. Hero Section with Gradient & Animation */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-24 sm:py-32">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
        <div className="container relative mx-auto px-6 text-center">
          <div className="inline-flex items-center rounded-full bg-brand-teal/10 px-4 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-brand-teal mr-2" />
            <p className="text-sm font-semibold text-brand-teal">Η Ιστορία μας</p>
          </div>
          <h1 className="mt-2 text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-brand-teal to-gray-900">
            Χτίστηκε από οικοδεσπότες,<br />για οικοδεσπότες.
          </h1>
          <p className="mt-8 max-w-2xl mx-auto text-xl leading-8 text-gray-600">
            Ξέρουμε το άπειρο κύκλο του πλυσίματος. Ξεκινήσαμε την Ironone για να λύσουμε ένα πρόβλημα που αντιμετώπισε εμείς εαυτούς, δίνοντας στους οικοδεσπότες το χρόνο και την ηρεμία τους.
          </p>

        </div>
      </section>

      {/* 2. Story Section with Enhanced Design */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 items-center gap-x-16 gap-y-16 lg:grid-cols-2">
            {/* Left Column: Image with Premium Effect */}
            <div className="relative h-[500px] w-full max-w-lg mx-auto lg:mx-0 order-2 lg:order-1">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-blue-400/30 via-purple-400/30 to-pink-400/30 blur-2xl opacity-70 animate-pulse"></div>
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-teal/20 to-purple-600/20 opacity-40"></div>
              <img
                src="/l.png"
                alt="The Ironone founder or team"
                className="relative w-full h-full object-cover rounded-3xl shadow-2xl ring-1 ring-gray-900/10"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 max-w-[200px]">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 rounded-full p-3">
                    <Heart className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">5★</p>
                    <p className="text-xs text-gray-600">Αξιολογήσεις Επισκεπτών</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Text Content */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 mb-6">
                <span className="text-xs font-semibold text-gray-600">Η ΙΣΤΟΡΙΑ ΤΗΣ IRONONE</span>
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl leading-tight">
                Από Πλύσιμο Νυχτερινών Χρόνων σε Μια Επαγγελματική Υπηρεσία
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Ως οικοδεσπότες βραχυχρόνιας μίσθωσης, ήμαστε παραπλανημένοι από την παροχή μιας 5-αστερής εμπειρίας. Αλλά το ένα πράγμα που συνεχώς αφαιρούσε χρόνο και ενέργεια μας ήταν το πλύσιμο. Η πίεση για να έχουμε τέλεια καθαρά, ξηρά και φρέσκα είδη για κάθε μία μεταβίβαση ήταν τεράστια.
              </p>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Ανακάλυψαμε ότι υπάρχει ένα καλύτερο τρόπο. Εξέτασαμε μια αξιόπιστη, υψηλής ποιότητας υπηρεσία που προσαρμόζεται στις ιδιαίτερες ανάγκες των οικοδεσπότων, αλλά δεν μπορούσαμε να την βρούμε. Έτσι, την χτίσαμε. Η Ironone γεννήθηκε από την εμπειρία μας, με ένα σχέδιο που σχεδιάστηκε για να είναι άμεσο, αξιόπιστο και να παράγει τα αποτελέσματα ποιότητας ξενοδοχείου που δικαιούστε οι επισκέπτες σας.
              </p>
              
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6">
                  <Clock className="h-8 w-8 text-brand-teal mb-3" />
                  <p className="text-2xl font-bold text-gray-900">24-48h</p>
                  <p className="text-sm text-gray-600 mt-1">Χρονικό Διάστημα Παραλαβής</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
                  <Award className="h-8 w-8 text-purple-600 mb-3" />
                  <p className="text-2xl font-bold text-gray-900">Hotel</p>
                  <p className="text-sm text-gray-600 mt-1">Ποιότητα Ξενοδοχείου</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission Section with Modern Cards */}
      <section className="relative bg-gradient-to-br from-brand-teal via-teal-600 to-brand-teal text-gray-600 py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
        <div className="container relative mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 mb-6 backdrop-blur-sm">
              <Target className="h-4 w-4 text-gray-600 mr-2" />
              <p className="text-3xl font-bold text-gray-600">Η ΜΙΣΗ ΤΗΣ ΙRONONE</p>
            </div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Ενεργοποίηση Οικοδεσπότων, Καθημερινά</h2>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              Να ενεργοποιήσουμε τους οικοδεσπότες βραχυχρόνιας μίσθωσης με την παροχή μιας άριστης και αξιόπιστης υπηρεσίας πλυσίματος, επιτρέποντας τους να παράγουν εξαιρετικές εμπειρίες επισκεπτών, να κερδίσουν αξιολογήσεις 5 αστερών και να αποκτήσουν το χρόνο τους πίσω.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            
            <div className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/20 group-hover:scale-110 transition-transform duration-300">
                <Target className="h-7 w-7 text-gray-600" />
              </div>
                  <h3 className="mt-6 text-xl font-semibold text-gray-600">Άριστη Ποιότητα</h3>
              <p className="mt-3 text-base text-gray-600">
                Κάθε είδος αντιμετωπίζεται με προσοχή και ελέγχεται για να ικανοποιεί τις προδιαγραφές ποιότητας ξενοδοχείου. Χωρίς συμβάσεις, χωρίς παραβιάσεις.
              </p>
            </div>

            <div className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/20 group-hover:scale-110 transition-transform duration-300">
                <Heart className="h-7 w-7 text-gray-600" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-600">Υπηρεσία Οικοδεσπότη</h3>
              <p className="mt-3 text-base text-gray-600">
                Είμαστε πλήρως σε θέση να καταλάβουμε τις προκλήσεις σας επειδή έχουμε βρεθεί στην θέση σας. Η υπηρεσία μας σχεδιάστηκε για να είναι ο αξιόπιστος σας συνεργάτης.
              </p>
            </div>

            <div className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/20 group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-7 w-7 text-gray-600" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-600">Απόλυτη Αξιόπιστη</h3>
              <p className="mt-3 text-base text-gray-600">
                Γρήγορη, σωστή παραλαβή και παράδοση, έτσι ώστε να είστε πάντα έτοιμοι για τον επόμενο επισκέπτη σας. Κάθε φορά.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Values/Stats Section */}
      <section className="py-24 sm:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Χτίστηκε σε Πίστη & Άριστο
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Αριθμοί που μιλούν για την συνειδητή μας συμμετοχή
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="relative bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <p className="text-4xl font-bold text-gray-900">500+</p>
              <p className="mt-2 text-sm text-gray-600">Χαρούμενοι Οικοδεσπότες</p>
            </div>

            <div className="relative bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-2xl mb-4">
                <Sparkles className="h-8 w-8 text-purple-600" />
              </div>
              <p className="text-4xl font-bold text-gray-900">10K+</p>
              <p className="mt-2 text-sm text-gray-600">Μεταβιβάσεις Ολοκληρωμένες</p>
            </div>

            <div className="relative bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <p className="text-4xl font-bold text-gray-900">98%</p>
              <p className="mt-2 text-sm text-gray-600">Ποσοστό Ικανοποίησης</p>
            </div>

            <div className="relative bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-2xl mb-4">
                <Clock className="h-8 w-8 text-pink-600" />
              </div>
              <p className="text-4xl font-bold text-gray-900">24-48h</p>
              <p className="mt-2 text-sm text-gray-600">Μέσο Χρονικό Διάστημα Παραλαβής</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="bg-gray-900 py-24 sm:py-32">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Ετοιμοί να αποκτήσετε το χρόνο σας πίσω?
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl mx-auto">
            Γίνετε μέρος των εκατοντάδων οικοδεσπότων που εμπιστεύονται την Ironone για να παράγουν τέλεια καθαρά είδη, κάθε φορά.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors"
            >
              Κλείστε την Πρώτη σας Παραλαβή
            </a>
            <a
              href="/services"
              className="text-sm font-semibold leading-6 text-white hover:text-gray-300 transition-colors"
            >
              Δείτε πως λειτουργεί <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;