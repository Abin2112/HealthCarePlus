import React from 'react';
import { Heart, Users, Award, Shield, Clock, CheckCircle } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'We treat every patient with empathy, respect, and genuine concern for their wellbeing.',
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards of medical practice and continuously strive for improvement.',
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      icon: Shield,
      title: 'Trust & Safety',
      description: 'Patient safety is our top priority, and we maintain strict protocols for quality care.',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Our multidisciplinary team works together to provide comprehensive healthcare solutions.',
      color: 'bg-blue-100 text-blue-600'
    }
  ];

  const milestones = [
    { year: '1995', event: 'HealthCare Plus founded with a vision to revolutionize patient care' },
    { year: '2005', event: 'Expanded to include 15 medical specialties and 100+ physicians' },
    { year: '2015', event: 'Introduced cutting-edge digital health records and telemedicine' },
    { year: '2020', event: 'Launched 24/7 emergency services and urgent care facilities' },
    { year: '2024', event: 'Serving over 50,000 patients with state-of-the-art medical technology' }
  ];

  const achievements = [
    { number: '50+', label: 'Expert Physicians' },
    { number: '25,000+', label: 'Patients Served' },
    { number: '15+', label: 'Medical Specialties' },
    { number: '99%', label: 'Patient Satisfaction' },
    { number: '24/7', label: 'Emergency Care' },
    { number: '5★', label: 'Average Rating' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About HealthCare Plus</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              For nearly three decades, we've been dedicated to providing exceptional healthcare 
              services that combine medical excellence with compassionate patient care.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/3279196/pexels-photo-3279196.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Medical team"
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed">
                  To provide comprehensive, compassionate healthcare services that improve the lives 
                  of our patients and strengthen our community. We are committed to delivering 
                  exceptional medical care through innovation, collaboration, and unwavering dedication 
                  to patient wellbeing.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
                <p className="text-gray-600 leading-relaxed">
                  To be the leading healthcare provider in our region, recognized for clinical 
                  excellence, patient satisfaction, and innovative medical solutions. We envision 
                  a future where quality healthcare is accessible, affordable, and personalized 
                  for every individual.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide everything we do and shape our approach to patient care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <div className={`w-16 h-16 ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Achievements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and the trust our patients place in us.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-600 text-sm font-medium">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">
              Key milestones in our commitment to advancing healthcare excellence.
            </p>
          </div>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    {milestone.year.slice(-2)}
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex-1">
                  <div className="font-bold text-blue-600 mb-2">{milestone.year}</div>
                  <p className="text-gray-700">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Message */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                A Message from Our Leadership
              </h2>
              <blockquote className="text-lg text-gray-700 leading-relaxed italic">
                "At HealthCare Plus, we believe that exceptional healthcare goes beyond treating illness—
                it's about building relationships, fostering trust, and empowering our patients to live 
                their healthiest lives. Our commitment to innovation, combined with our dedication to 
                compassionate care, drives us to continuously raise the bar in medical excellence."
              </blockquote>
              <div className="flex items-center space-x-4">
                <img
                  src="https://images.pexels.com/photos/1624438/pexels-photo-1624438.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="CEO"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">Dr. Amanda Richardson</div>
                  <div className="text-blue-600">Chief Executive Officer</div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Healthcare facility"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Accreditations & Certifications</h2>
            <p className="text-gray-600">
              We maintain the highest standards through recognized healthcare accreditations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Joint Commission Accredited</h3>
              <p className="text-gray-600 text-sm">Gold seal of approval for quality and safety</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">AAAHC Certified</h3>
              <p className="text-gray-600 text-sm">Ambulatory care excellence recognition</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">HIMSS Stage 7</h3>
              <p className="text-gray-600 text-sm">Highest level of EMR adoption and utilization</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;