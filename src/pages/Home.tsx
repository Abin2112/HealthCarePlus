import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Shield, Clock, Users, Star, ArrowRight, CheckCircle } from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: Heart,
      title: 'Cardiology',
      description: 'Comprehensive heart care with advanced diagnostic and treatment options.',
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: Users,
      title: 'Family Medicine',
      description: 'Complete healthcare for patients of all ages, from newborns to seniors.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Shield,
      title: 'Emergency Care',
      description: '24/7 emergency services with rapid response and expert medical care.',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Clock,
      title: 'Urgent Care',
      description: 'Walk-in care for non-emergency medical conditions and minor injuries.',
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  const doctors = [
    {
      name: 'Dr. George Johnson',
      specialty: 'Cardiologist',
      experience: '15+ years',
      image: 'https://media.istockphoto.com/id/1298800629/photo/portrait-of-confident-male-doctor-looking-at-camera.jpg?s=2048x2048&w=is&k=20&c=nSjOQrrbcf6w00lZk7Owo5WfHdMu_WEGuZUh119U4jA=',
      rating: 4.9
    },
    {
      name: 'Dr. Michael Chen',
      specialty: 'Neurologist',
      experience: '12+ years',
      image: 'https://media.istockphoto.com/id/1080237358/photo/indian-male-doctor-on-blue-background-stock-image.jpg?s=2048x2048&w=is&k=20&c=MEfYAOvKBW66OlYvyWKuErVqjSN3EovcmbfG5k9Fh5o=',
      rating: 4.8
    },
    {
      name: 'Dr. Merwin Rodriguez',
      specialty: 'Pediatrician',
      experience: '10+ years',
      image: 'https://media.istockphoto.com/id/1327024466/photo/portrait-of-male-doctor-in-white-coat-and-stethoscope-standing-in-clinic-hall.jpg?s=612x612&w=0&k=20&c=49wqOwwuonk9f8NACL7M_5RosqQPFwJ8-dpmeo9AvQw=',
      rating: 4.9
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Adams',
      content: 'The care I received was exceptional. The staff was professional and caring throughout my treatment.',
      rating: 5,
      treatment: 'Cardiac Surgery'
    },
    {
      name: 'Robert Kim',
      content: 'Dr. Chen helped me through a difficult diagnosis with expertise and compassion. Highly recommended!',
      rating: 5,
      treatment: 'Neurology Consultation'
    },
    {
      name: 'Maria Santos',
      content: 'The pediatric team made my daughter feel comfortable during her visit. Outstanding service!',
      rating: 5,
      treatment: 'Pediatric Care'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Your Health, Our
                <span className="text-green-400"> Priority</span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Experience world-class healthcare with our team of expert physicians, 
                state-of-the-art facilities, and personalized patient care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/appointments"
                  className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition-all duration-200 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Book Appointment
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 text-center"
                >
                  Our Services
                </Link>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold">50+</div>
                  <div className="text-blue-200 text-sm">Expert Doctors</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">25k+</div>
                  <div className="text-blue-200 text-sm">Happy Patients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-blue-200 text-sm">Specialties</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://teu-production.s3.amazonaws.com/images/HCP_Logo_transparent.width-1200.png"
                alt="Medical professionals"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-15 -left-7 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">24/7 Emergency Care</div>
                    <div className="text-gray-600 text-sm">Always here for you</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Healthcare Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From routine checkups to specialized treatments, we provide complete medical care 
              with the latest technology and compassionate service.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group"
              >
                <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200`}>
                  <service.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Doctors */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Doctors
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced medical professionals are dedicated to providing 
              the highest quality care with expertise and compassion.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold">{doctor.rating}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{doctor.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{doctor.specialty}</p>
                  <p className="text-gray-600 text-sm mb-4">{doctor.experience} experience</p>
                  <Link
                    to="/doctors"
                    className="text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200 inline-flex items-center"
                  >
                    View Profile
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/doctors"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              View All Doctors
            </Link>
          </div>
        </div>
      </section>

      {/* Patient Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Patients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from real patients who have experienced our exceptional care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-blue-600 text-sm">{testimonial.treatment}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Take Control of Your Health?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Schedule your appointment today and experience the difference that quality healthcare makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/appointments"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg"
            >
              Book Appointment Now
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;