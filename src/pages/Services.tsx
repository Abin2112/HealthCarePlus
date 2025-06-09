import React from 'react';
import { Heart, Brain, Bone, Baby, Stethoscope, Eye, Scissors, Activity, Clock, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: 'Cardiology',
      description: 'Comprehensive heart and cardiovascular care including diagnostics, interventional procedures, and cardiac rehabilitation.',
      features: ['ECG & Echocardiogram', 'Cardiac Catheterization', 'Pacemaker Implantation', 'Heart Surgery'],
      color: 'bg-red-100 text-red-600',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: Brain,
      title: 'Neurology',
      description: 'Advanced neurological care for brain, spine, and nervous system disorders with cutting-edge diagnostic tools.',
      features: ['MRI & CT Scans', 'EEG Testing', 'Stroke Treatment', 'Epilepsy Management'],
      color: 'bg-purple-100 text-purple-600',
      image: 'https://images.pexels.com/photos/3279196/pexels-photo-3279196.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: Bone,
      title: 'Orthopedics',
      description: 'Complete musculoskeletal care including joint replacement, sports medicine, and rehabilitation services.',
      features: ['Joint Replacement', 'Sports Medicine', 'Fracture Care', 'Physical Therapy'],
      color: 'bg-blue-100 text-blue-600',
      image: 'https://images.pexels.com/photos/7108325/pexels-photo-7108325.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: Baby,
      title: 'Pediatrics',
      description: 'Specialized healthcare for infants, children, and adolescents with family-centered approach.',
      features: ['Well-Child Visits', 'Immunizations', 'Growth Monitoring', 'Developmental Screening'],
      color: 'bg-green-100 text-green-600',
      image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: Eye,
      title: 'Ophthalmology',
      description: 'Complete eye care services from routine exams to advanced surgical procedures for vision correction.',
      features: ['Eye Exams', 'Cataract Surgery', 'LASIK Surgery', 'Retinal Care'],
      color: 'bg-yellow-100 text-yellow-600',
      image: 'https://images.pexels.com/photos/5752123/pexels-photo-5752123.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: Scissors,
      title: 'General Surgery',
      description: 'Minimally invasive and traditional surgical procedures with experienced surgical teams.',
      features: ['Laparoscopic Surgery', 'Hernia Repair', 'Gallbladder Surgery', 'Appendectomy'],
      color: 'bg-indigo-100 text-indigo-600',
      image: 'https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: Stethoscope,
      title: 'Internal Medicine',
      description: 'Primary care for adults focusing on prevention, diagnosis, and treatment of internal diseases.',
      features: ['Annual Physicals', 'Chronic Disease Management', 'Preventive Care', 'Health Screenings'],
      color: 'bg-teal-100 text-teal-600',
      image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: Activity,
      title: 'Emergency Medicine',
      description: '24/7 emergency care with rapid response team and state-of-the-art emergency facilities.',
      features: ['24/7 Emergency Care', 'Trauma Center', 'Critical Care', 'Emergency Surgery'],
      color: 'bg-red-100 text-red-600',
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const emergencyServices = [
    { icon: Clock, title: '24/7 Emergency Care', description: 'Round-the-clock emergency medical services' },
    { icon: Activity, title: 'Trauma Center', description: 'Level II trauma center with specialized care' },
    { icon: Heart, title: 'Cardiac Emergency', description: 'Immediate response for heart-related emergencies' },
    { icon: Users, title: 'Pediatric Emergency', description: 'Specialized emergency care for children' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Medical Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Comprehensive healthcare services delivered by expert physicians using 
              state-of-the-art technology and evidence-based treatment approaches.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="p-8">
                    <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                      <service.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Services:</h4>
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-20 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Emergency Services</h2>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              When every second counts, our emergency team is ready to provide 
              immediate, life-saving care 24 hours a day, 365 days a year.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {emergencyServices.map((service, index) => (
              <div
                key={index}
                className="bg-red-700 bg-opacity-50 backdrop-blur-sm p-6 rounded-xl text-center hover:bg-opacity-70 transition-all duration-300"
              >
                <service.icon className="h-12 w-12 mx-auto mb-4 text-red-100" />
                <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                <p className="text-red-100 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-8 inline-block">
              <h3 className="text-2xl font-bold mb-4">Emergency Contact</h3>
              <p className="text-3xl font-bold text-yellow-300 mb-2">(555) 911-1111</p>
              <p className="text-red-100">For life-threatening emergencies, call 911 immediately</p>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Technology */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Advanced Medical Technology
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We invest in the latest medical technology to ensure our patients receive 
                the most accurate diagnoses and effective treatments available.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Activity className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Digital Imaging</h3>
                    <p className="text-gray-600 text-sm">High-resolution MRI, CT, and X-ray systems for precise diagnostics</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Heart className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Robotic Surgery</h3>
                    <p className="text-gray-600 text-sm">Minimally invasive procedures with enhanced precision and faster recovery</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Brain className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">AI-Assisted Diagnostics</h3>
                    <p className="text-gray-600 text-sm">Artificial intelligence supporting accurate and rapid diagnosis</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Medical technology"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Medical Care?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Don't wait to get the care you need. Schedule an appointment with our specialists today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/appointments"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg"
            >
              Schedule Appointment
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;