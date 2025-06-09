import React, { useState } from 'react';
import { Star, MapPin, Calendar, Award, GraduationCap, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Doctors = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');

  const specialties = ['All', 'Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics', 'Internal Medicine', 'Emergency Medicine'];

  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiology',
      subSpecialty: 'Interventional Cardiology',
      experience: '15+ years',
      education: 'Harvard Medical School',
      rating: 4.9,
      reviews: 248,
      image: 'https://media.istockphoto.com/id/1298800629/photo/portrait-of-confident-male-doctor-looking-at-camera.jpg?s=2048x2048&w=is&k=20&c=nSjOQrrbcf6w00lZk7Owo5WfHdMu_WEGuZUh119U4jA=',
      languages: ['English', 'Spanish'],
      certifications: ['Board Certified Cardiologist', 'Fellow of American College of Cardiology'],
      bio: 'Dr. Johnson specializes in interventional cardiology with expertise in complex cardiac procedures. She has published numerous research papers and is recognized for her patient-centered approach.',
      availability: 'Mon, Wed, Fri'
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      specialty: 'Neurology',
      subSpecialty: 'Stroke & Neurocritical Care',
      experience: '12+ years',
      education: 'Johns Hopkins University',
      rating: 4.8,
      reviews: 192,
      image: 'https://media.istockphoto.com/id/1080237358/photo/indian-male-doctor-on-blue-background-stock-image.jpg?s=2048x2048&w=is&k=20&c=MEfYAOvKBW66OlYvyWKuErVqjSN3EovcmbfG5k9Fh5o=',
      languages: ['English', 'Mandarin'],
      certifications: ['Board Certified Neurologist', 'Neurocritical Care Specialist'],
      bio: 'Dr. Chen is a leading expert in stroke care and neurocritical medicine, with extensive experience in treating complex neurological conditions.',
      availability: 'Tue, Thu, Sat'
    },
    {
      id: 3,
      name: 'Dr. Merwin Rodriguez',
      specialty: 'Pediatrics',
      subSpecialty: 'Developmental Pediatrics',
      experience: '10+ years',
      education: 'Stanford Medical School',
      rating: 4.9,
      reviews: 315,
      image: 'https://media.istockphoto.com/id/1327024466/photo/portrait-of-male-doctor-in-white-coat-and-stethoscope-standing-in-clinic-hall.jpg?s=612x612&w=0&k=20&c=49wqOwwuonk9f8NACL7M_5RosqQPFwJ8-dpmeo9AvQw=',
      languages: ['English', 'Spanish', 'Portuguese'],
      certifications: ['Board Certified Pediatrician', 'Developmental-Behavioral Pediatrics'],
      bio: 'Dr. Rodriguez specializes in developmental and behavioral pediatrics, helping children reach their full potential through comprehensive care.',
      availability: 'Mon, Tue, Thu'
    },
    {
      id: 4,
      name: 'Dr. James Wilson',
      specialty: 'Orthopedics',
      subSpecialty: 'Sports Medicine',
      experience: '18+ years',
      education: 'Mayo Clinic College of Medicine',
      rating: 4.7,
      reviews: 203,
      image: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=400',
      languages: ['English'],
      certifications: ['Board Certified Orthopedic Surgeon', 'Sports Medicine Specialist'],
      bio: 'Dr. Wilson is a renowned sports medicine specialist with extensive experience treating professional athletes and weekend warriors alike.',
      availability: 'Wed, Fri, Sat'
    },
    {
      id: 5,
      name: 'Dr. Abraham Thompson',
      specialty: 'Internal Medicine',
      subSpecialty: 'Geriatric Medicine',
      experience: '14+ years',
      education: 'University of Pennsylvania',
      rating: 4.8,
      reviews: 167,
      image: 'https://www.shutterstock.com/image-photo/healthcare-medical-staff-concept-portrait-600nw-2281024823.jpg',
      languages: ['English', 'French'],
      certifications: ['Board Certified Internal Medicine', 'Geriatric Medicine Specialist'],
      bio: 'Dr. Thompson focuses on internal medicine with special expertise in geriatric care, helping older adults maintain their health and independence.',
      availability: 'Mon, Wed, Fri'
    },
    {
      id: 6,
      name: 'Dr. Robert Kim',
      specialty: 'Emergency Medicine',
      subSpecialty: 'Trauma & Critical Care',
      experience: '11+ years',
      education: 'UCLA Medical School',
      rating: 4.6,
      reviews: 89,
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400',
      languages: ['English', 'Korean'],
      certifications: ['Board Certified Emergency Medicine', 'Critical Care Medicine'],
      bio: 'Dr. Kim is an emergency medicine physician specializing in trauma and critical care, with expertise in managing life-threatening conditions.',
      availability: '24/7 Emergency'
    }
  ];

  const filteredDoctors = selectedSpecialty === 'All' 
    ? doctors 
    : doctors.filter(doctor => doctor.specialty === selectedSpecialty);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Expert Doctors</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Our team of board-certified physicians brings decades of experience and 
              specialized expertise to provide you with exceptional healthcare.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {specialties.map((specialty) => (
              <button
                key={specialty}
                onClick={() => setSelectedSpecialty(specialty)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedSpecialty === specialty
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {specialty}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDoctors.map((doctor) => (
              <div
                key={doctor.id}
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
                  <div className="absolute bottom-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {doctor.specialty}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{doctor.name}</h3>
                  <p className="text-blue-600 font-medium mb-1">{doctor.subSpecialty}</p>
                  <p className="text-gray-600 text-sm mb-4">{doctor.experience} experience</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <GraduationCap className="h-4 w-4" />
                      <span>{doctor.education}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Calendar className="h-4 w-4" />
                      <span>Available: {doctor.availability}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Users className="h-4 w-4" />
                      <span>{doctor.reviews} patient reviews</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Languages:</h4>
                    <div className="flex flex-wrap gap-2">
                      {doctor.languages.map((language, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                        >
                          {language}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Certifications:</h4>
                    <div className="space-y-1">
                      {doctor.certifications.map((cert, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Award className="h-3 w-3 text-blue-600" />
                          <span className="text-xs text-gray-600">{cert}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {doctor.bio}
                  </p>

                  <div className="flex space-x-3">
                    <Link
                      to="/appointments"
                      className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
                    >
                      Book Appointment
                    </Link>
                    <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-200">
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Doctors?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our physicians are not just highly qualified—they're committed to providing 
              personalized, compassionate care for every patient.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Board-Certified Physicians</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Medical Specialties</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">4.8★</div>
              <div className="text-gray-600">Average Patient Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Patient Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Meet Your Doctor?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Schedule an appointment with one of our expert physicians and experience personalized healthcare.
          </p>
          <Link
            to="/appointments"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg inline-block"
          >
            Schedule Your Appointment
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Doctors;