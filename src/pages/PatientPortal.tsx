import React, { useState } from 'react';
import { User, Lock, FileText, Calendar, Heart, Pill, Download, Eye, Shield, Clock } from 'lucide-react';

const PatientPortal = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login - in real app, this would authenticate with backend
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoginData({ email: '', password: '' });
  };

  const patientData = {
    name: 'John Anderson',
    dateOfBirth: '1985-06-15',
    patientId: 'PT-12345',
    email: 'john.anderson@email.com',
    phone: '(555) 123-4567',
    address: '123 Main St, Healthcare City, HC 12345',
    emergencyContact: 'Jane Anderson - (555) 987-6543'
  };

  const upcomingAppointments = [
    {
      id: 1,
      date: '2024-02-15',
      time: '2:00 PM',
      doctor: 'Dr. Sarah Johnson',
      department: 'Cardiology',
      type: 'Follow-up Visit',
      status: 'Confirmed'
    },
    {
      id: 2,
      date: '2024-02-28',
      time: '10:30 AM',
      doctor: 'Dr. Lisa Thompson',
      department: 'Internal Medicine',
      type: 'Annual Physical',
      status: 'Scheduled'
    }
  ];

  const medicalRecords = [
    {
      id: 1,
      date: '2024-01-15',
      type: 'Lab Results',
      provider: 'Dr. Sarah Johnson',
      description: 'Complete Blood Count and Lipid Panel',
      status: 'Available'
    },
    {
      id: 2,
      date: '2024-01-10',
      type: 'Visit Summary',
      provider: 'Dr. Lisa Thompson',
      description: 'Annual Physical Examination',
      status: 'Available'
    },
    {
      id: 3,
      date: '2023-12-20',
      type: 'Prescription',
      provider: 'Dr. Sarah Johnson',
      description: 'Blood Pressure Medication Refill',
      status: 'Available'
    }
  ];

  const medications = [
    {
      name: 'Lisinopril',
      dosage: '10mg',
      frequency: 'Once daily',
      prescribedBy: 'Dr. Sarah Johnson',
      dateStarted: '2023-12-20',
      refillsRemaining: 3
    },
    {
      name: 'Metformin',
      dosage: '500mg',
      frequency: 'Twice daily',
      prescribedBy: 'Dr. Lisa Thompson',
      dateStarted: '2023-11-15',
      refillsRemaining: 2
    }
  ];

  const vitalSigns = [
    { date: '2024-01-15', bloodPressure: '120/80', weight: '175 lbs', temperature: '98.6°F', heartRate: '72 bpm' },
    { date: '2023-12-20', bloodPressure: '118/78', weight: '174 lbs', temperature: '98.4°F', heartRate: '70 bpm' },
    { date: '2023-11-15', bloodPressure: '122/82', weight: '176 lbs', temperature: '98.7°F', heartRate: '74 bpm' }
  ];

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Patient Portal Login</h2>
              <p className="text-gray-600">Access your medical records and health information securely</p>
            </div>
            
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    required
                    value={loginData.email}
                    onChange={(e) => setLoginData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="password"
                    required
                    value={loginData.password}
                    onChange={(e) => setLoginData(prev => ({ ...prev, password: e.target.value }))}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your password"
                  />
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
                    Remember me
                  </label>
                </div>
                <a href="#" className="text-sm text-blue-600 hover:text-blue-700">
                  Forgot password?
                </a>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
              >
                Sign In
              </button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Need help accessing your account?{' '}
                <a href="/contact" className="text-blue-600 hover:text-blue-700">Contact Support</a>
              </p>
            </div>
            
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h3 className="font-medium text-blue-900 mb-2">Demo Access</h3>
              <p className="text-sm text-blue-800">
                For demo purposes, use any email and password to access the portal.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div>
              <h1 className="text-xl font-semibold text-gray-900">Patient Portal</h1>
              <p className="text-sm text-gray-600">Welcome back, {patientData.name}</p>
            </div>
            <button
              onClick={handleLogout}
              className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <nav className="bg-white rounded-lg shadow-md p-6">
              <div className="space-y-2">
                {[
                  { id: 'overview', label: 'Overview', icon: User },
                  { id: 'appointments', label: 'Appointments', icon: Calendar },
                  { id: 'records', label: 'Medical Records', icon: FileText },
                  { id: 'medications', label: 'Medications', icon: Pill },
                  { id: 'vitals', label: 'Vital Signs', icon: Heart }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors duration-200 ${
                      activeTab === item.id
                        ? 'bg-blue-100 text-blue-700 border-r-4 border-blue-600'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                ))}
              </div>
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Patient Info Card */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">Patient Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-medium text-gray-900 mb-3">Personal Details</h3>
                      <div className="space-y-2 text-sm">
                        <p><span className="font-medium">Name:</span> {patientData.name}</p>
                        <p><span className="font-medium">Date of Birth:</span> {new Date(patientData.dateOfBirth).toLocaleDateString()}</p>
                        <p><span className="font-medium">Patient ID:</span> {patientData.patientId}</p>
                        <p><span className="font-medium">Email:</span> {patientData.email}</p>
                        <p><span className="font-medium">Phone:</span> {patientData.phone}</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-3">Contact Information</h3>
                      <div className="space-y-2 text-sm">
                        <p><span className="font-medium">Address:</span> {patientData.address}</p>
                        <p><span className="font-medium">Emergency Contact:</span> {patientData.emergencyContact}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg shadow-md p-6 text-center">
                    <Calendar className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-900 mb-2">Schedule Appointment</h3>
                    <p className="text-gray-600 text-sm mb-4">Book your next visit</p>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors duration-200">
                      Book Now
                    </button>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-6 text-center">
                    <FileText className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-900 mb-2">View Records</h3>
                    <p className="text-gray-600 text-sm mb-4">Access your medical history</p>
                    <button
                      onClick={() => setActiveTab('records')}
                      className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition-colors duration-200"
                    >
                      View Records
                    </button>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-6 text-center">
                    <Pill className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-900 mb-2">Medications</h3>
                    <p className="text-gray-600 text-sm mb-4">Manage prescriptions</p>
                    <button
                      onClick={() => setActiveTab('medications')}
                      className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 transition-colors duration-200"
                    >
                      View Meds
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'appointments' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">Upcoming Appointments</h2>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors duration-200">
                    Schedule New
                  </button>
                </div>
                <div className="space-y-4">
                  {upcomingAppointments.map((appointment) => (
                    <div key={appointment.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-gray-900">{appointment.doctor}</h3>
                          <p className="text-gray-600">{appointment.department}</p>
                          <p className="text-sm text-gray-500">{appointment.type}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-gray-900">{new Date(appointment.date).toLocaleDateString()}</p>
                          <p className="text-gray-600">{appointment.time}</p>
                          <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                            appointment.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {appointment.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'records' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Medical Records</h2>
                <div className="space-y-4">
                  {medicalRecords.map((record) => (
                    <div key={record.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-gray-900">{record.type}</h3>
                          <p className="text-gray-600">{record.description}</p>
                          <p className="text-sm text-gray-500">Provider: {record.provider}</p>
                          <p className="text-sm text-gray-500">Date: {new Date(record.date).toLocaleDateString()}</p>
                        </div>
                        <div className="flex space-x-2">
                          <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 text-sm">
                            <Eye className="h-4 w-4" />
                            <span>View</span>
                          </button>
                          <button className="flex items-center space-x-1 text-green-600 hover:text-green-700 text-sm">
                            <Download className="h-4 w-4" />
                            <span>Download</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'medications' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Current Medications</h2>
                <div className="space-y-4">
                  {medications.map((medication, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-gray-900">{medication.name}</h3>
                          <p className="text-gray-600">{medication.dosage} - {medication.frequency}</p>
                          <p className="text-sm text-gray-500">Prescribed by: {medication.prescribedBy}</p>
                          <p className="text-sm text-gray-500">Started: {new Date(medication.dateStarted).toLocaleDateString()}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-600">Refills remaining: {medication.refillsRemaining}</p>
                          <button className="mt-2 bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition-colors duration-200">
                            Request Refill
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'vitals' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Vital Signs History</h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Date</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Blood Pressure</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Weight</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Temperature</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Heart Rate</th>
                      </tr>
                    </thead>
                    <tbody>
                      {vitalSigns.map((vital, index) => (
                        <tr key={index} className="border-b border-gray-100">
                          <td className="py-3 px-4 text-gray-900">{new Date(vital.date).toLocaleDateString()}</td>
                          <td className="py-3 px-4 text-gray-600">{vital.bloodPressure}</td>
                          <td className="py-3 px-4 text-gray-600">{vital.weight}</td>
                          <td className="py-3 px-4 text-gray-600">{vital.temperature}</td>
                          <td className="py-3 px-4 text-gray-600">{vital.heartRate}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientPortal;