import React, { useState } from 'react';
import { Calendar, User, Clock, Search, Tag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Heart Health', 'Nutrition', 'Pediatrics', 'Mental Health', 'Prevention', 'Exercise'];

  const blogPosts = [
    {
      id: 1,
      title: '10 Heart-Healthy Foods to Add to Your Diet',
      excerpt: 'Discover the best foods for cardiovascular health and learn how simple dietary changes can significantly reduce your risk of heart disease.',
      content: 'Your heart is one of the most important organs in your body, and what you eat directly impacts its health...',
      category: 'Heart Health',
      author: 'Dr. Sarah Johnson',
      date: '2024-01-15',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Heart Health', 'Nutrition', 'Diet']
    },
    {
      id: 2,
      title: 'Understanding Childhood Vaccinations: A Parent\'s Guide',
      excerpt: 'Everything parents need to know about childhood immunizations, including schedules, safety, and the importance of vaccination.',
      content: 'As a parent, ensuring your child\'s health and safety is your top priority. Vaccinations play a crucial role...',
      category: 'Pediatrics',
      author: 'Dr. Emily Rodriguez',
      date: '2024-01-12',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/4023545/pexels-photo-4023545.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Pediatrics', 'Vaccination', 'Child Health']
    },
    {
      id: 3,
      title: 'Managing Stress: Simple Techniques for Better Mental Health',
      excerpt: 'Learn effective stress management techniques that can improve your mental health and overall quality of life.',
      content: 'In today\'s fast-paced world, stress has become an unavoidable part of daily life. However, chronic stress...',
      category: 'Mental Health',
      author: 'Dr. Michael Chen',
      date: '2024-01-10',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Mental Health', 'Stress', 'Wellness']
    },
    {
      id: 4,
      title: 'The Importance of Regular Exercise for Bone Health',
      excerpt: 'Discover how regular physical activity can strengthen your bones and reduce the risk of osteoporosis as you age.',
      content: 'Strong bones are the foundation of a healthy, active lifestyle. As we age, maintaining bone density becomes...',
      category: 'Exercise',
      author: 'Dr. James Wilson',
      date: '2024-01-08',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/317157/pexels-photo-317157.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Exercise', 'Bone Health', 'Fitness']
    },
    {
      id: 5,
      title: 'Preventive Care: Why Annual Check-ups Matter',
      excerpt: 'Learn why regular health screenings and check-ups are essential for early detection and preventing serious health issues.',
      content: 'Prevention is always better than cure. Regular health check-ups are one of the most effective ways...',
      category: 'Prevention',
      author: 'Dr. Lisa Thompson',
      date: '2024-01-05',
      readTime: '4 min read',
      image: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Prevention', 'Health Screening', 'Wellness']
    },
    {
      id: 6,
      title: 'Nutrition Tips for Healthy Aging',
      excerpt: 'Discover essential nutrition strategies to support healthy aging and maintain vitality throughout your golden years.',
      content: 'As we age, our nutritional needs change, and maintaining a balanced diet becomes increasingly important...',
      category: 'Nutrition',
      author: 'Dr. Maria Garcia',
      date: '2024-01-03',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Nutrition', 'Aging', 'Healthy Living']
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1, 4);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Health & Wellness Blog</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Stay informed with the latest health insights, tips, and expert advice 
              from our medical professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Article</h2>
            <p className="text-gray-600">Our latest and most important health insights</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                  {featuredPost.category}
                </span>
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{featuredPost.readTime}</span>
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 leading-tight">
                {featuredPost.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center space-x-3">
                <img
                  src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=100"
                  alt={featuredPost.author}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-gray-900">{featuredPost.author}</p>
                  <p className="text-gray-600 text-sm">Medical Expert</p>
                </div>
              </div>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 inline-flex items-center">
                Read Full Article
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Recent Articles</h2>
            <p className="text-gray-600">Stay up-to-date with our latest health content</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer"
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{post.author}</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 2).map((tag, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stay Informed About Your Health
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Subscribe to our newsletter and get the latest health tips, medical insights, 
            and wellness advice delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Subscribe
            </button>
          </div>
          <p className="text-blue-100 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* Health Topics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Health Topics</h2>
            <p className="text-gray-600">Explore our most read articles by category</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.slice(1).map((category, index) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className="p-6 bg-gray-50 rounded-lg hover:bg-blue-50 hover:border-blue-200 border-2 border-transparent transition-all duration-200 text-center group"
              >
                <Tag className="h-8 w-8 text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform duration-200" />
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                  {category}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  {blogPosts.filter(post => post.category === category).length} articles
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;