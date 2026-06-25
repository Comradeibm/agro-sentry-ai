import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for reaching out! We will get back to you soon.");
  };

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div>
              <h1 className="text-4xl font-extrabold text-green-900 mb-6">Get in Touch</h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Whether you're a farmer looking for support or an organization wanting to partner, we're here to help.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center space-x-6">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Email Us</h3>
                  <p className="text-gray-600 text-lg">support@agroguard.ai</p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Call Us</h3>
                  <p className="text-gray-600 text-lg">+234 800 AGRO AI</p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Visit Us</h3>
                  <p className="text-gray-600 text-lg">123 Agric Plaza, Abuja, Nigeria</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-10 rounded-3xl border border-green-100 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-green-900">Full Name</label>
                <Input required placeholder="Your Name" className="bg-white py-6" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-green-900">Email Address</label>
                <Input required type="email" placeholder="email@example.com" className="bg-white py-6" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-green-900">Phone Number</label>
                <Input required placeholder="+234 ..." className="bg-white py-6" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-green-900">Message</label>
                <Textarea required placeholder="How can we help your farm?" className="bg-white min-h-[150px]" />
              </div>
              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 py-8 text-xl font-bold rounded-xl shadow-lg">
                <Send className="mr-2 h-6 w-6" /> Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
