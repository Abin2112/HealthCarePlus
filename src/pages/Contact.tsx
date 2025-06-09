import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    department: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const departments = [
    'General Inquiry',
    'Appointments',
    'Billing',
    'Medical Records',
    'Insurance',
    'Patient Services',
    'Emergency'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form data:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Message Sent!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for contacting us. We'll get back to you within 24 hours.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              We're here to help. Reach out to us for appointments, questions, 
              or any assistance you need with your healthcare.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600 mb-1">General: (555) 123-4567</p>
              <p className="text-gray-600">Emergency: (555) 911-1111</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600 mb-1">info@healthcareplus.com</p>
              <p className="text-gray-600">appointments@healthcareplus.com</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-600 mb-1">123 Medical Center Drive</p>
              <p className="text-gray-600">Healthcare City, HC 12345</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Hours</h3>
              <p className="text-gray-600 mb-1">Mon-Fri: 8AM-8PM</p>
              <p className="text-gray-600">Sat-Sun: 9AM-5PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Department
                    </label>
                    <select
                      name="department"
                      value={formData.department}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select Department</option>
                      {departments.map((dept) => (
                        <option key={dept} value={dept}>{dept}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Please describe how we can help you..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Find Us Here</h3>
                    <p className="text-gray-600">123 Medical Center Drive</p>
                    <p className="text-gray-600">Healthcare City, HC 12345</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Directions & Parking</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Free parking available in our main lot</li>
                    <li>• Valet parking available at main entrance</li>
                    <li>• Accessible parking spaces near all entrances</li>
                    <li>• Public transportation: Bus routes 15, 22, 45</li>
                  </ul>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-red-600 text-white rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4">Emergency Contact</h3>
                <p className="mb-4">
                  For life-threatening emergencies, call 911 immediately or visit our emergency department.
                </p>
                <div className="space-y-2">
                  <p className="font-semibold">Emergency Department: (555) 911-1111</p>
                  <p>Available 24/7 for urgent medical care</p>
                </div>
              </div>

              {/* Department Contacts */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Department Contacts</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Appointments:</span>
                    <span className="text-gray-900">(555) 123-4567</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Billing:</span>
                    <span className="text-gray-900">(555) 123-4568</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Medical Records:</span>
                    <span className="text-gray-900">(555) 123-4569</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Insurance:</span>
                    <span className="text-gray-900">(555) 123-4570</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Patient Services:</span>
                    <span className="text-gray-900">(555) 123-4571</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Quick answers to common questions</p>
          </div>
          <div className="space-y-6">
            {[
              {
                question: "How do I schedule an appointment?",
                answer: "You can schedule an appointment by calling (555) 123-4567, using our online appointment system, or visiting our patient portal."
              },
              {
                question: "What insurance plans do you accept?",
                answer: "We accept most major insurance plans. Please contact our billing department at (555) 123-4568 to verify your specific coverage."
              },
              {
                question: "What should I bring to my appointment?",
                answer: "Please bring a valid ID, insurance card, list of current medications, and any relevant medical records or test results."
              },
              {
                question: "How can I access my medical records?",
                answer: "You can access your medical records through our secure patient portal or by contacting our medical records department at (555) 123-4569."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;