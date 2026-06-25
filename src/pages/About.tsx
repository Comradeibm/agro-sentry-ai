import React from 'react';
import { Target, Eye, Award, CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white">
      {/* Mission & Vision */}
      <section className="py-24 bg-green-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-green-900 mb-6">About Sentinel AgroGuard AI</h1>
            <p className="text-xl text-gray-600">We are dedicated to transforming African agriculture through accessible, intelligent technology.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-green-100">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-8">
                <Target className="h-10 w-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-green-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To empower smallholder and commercial farmers across Africa with cutting-edge AI tools that increase yields, reduce waste, and improve profitability, ultimately ensuring food security for the continent.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-green-100">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-8">
                <Eye className="h-10 w-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-green-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be the leading digital agricultural platform in Africa, bridging the gap between traditional farming wisdom and modern technological innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/35f930e3-c538-4467-922d-6ecf408a56d8/farmer-community-3cef8d8d-1782386397584.webp" 
                alt="Our Community" 
                className="rounded-3xl shadow-2xl"
              />
            </div>
            <div className="flex-1 space-y-8">
              <h2 className="text-3xl font-bold text-green-900">Why Farmers Choose Us</h2>
              <div className="space-y-6">
                {[
                  { title: "Localized Knowledge", desc: "Expert advice tailored to Nigerian soil and climate conditions." },
                  { title: "Inclusive Technology", desc: "Designed for all literacy levels with voice and local language support." },
                  { title: "Real-time Solutions", desc: "Instant AI diagnostics that prevent massive crop loss." },
                  { title: "Community Driven", desc: "A platform that connects farmers to experts and each other." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1 shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg text-green-900">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Our Leadership Team</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { name: "Dr. Adebayo Smith", role: "CEO & AI Specialist" },
              { name: "Grace Nwosu", role: "Head of Agronomy" },
              { name: "Mustapha Ibrahim", role: "Operations Director" },
              { name: "Fatima Yusuf", role: "Product Designer" }
            ].map((member, i) => (
              <div key={i} className="text-center">
                <div className="w-40 h-40 bg-green-800 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Award className="h-16 w-16 text-green-400" />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-green-300">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
