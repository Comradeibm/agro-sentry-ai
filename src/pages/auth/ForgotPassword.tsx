import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sprout, Mail, ArrowLeft, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email");
      return;
    }
    setSubmitted(true);
    toast.success("Reset link sent!");
  };

  return (
    <div className="min-h-[calc(100vh-80px)] bg-green-50 flex items-center justify-center px-6 py-12">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-xl overflow-hidden border border-green-100">
        <div className="bg-green-600 p-8 text-white text-center">
          <Link to="/" className="inline-flex items-center space-x-2 mb-4">
            <Sprout className="h-8 w-8 text-green-200" />
            <span className="text-2xl font-bold">AgroGuard AI</span>
          </Link>
          <h2 className="text-3xl font-bold">Reset Password</h2>
        </div>
        
        <div className="p-8">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <p className="text-gray-600 text-center font-medium">
                Enter your email address and we'll send you a link to reset your password.
              </p>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input 
                  type="email" 
                  placeholder="Email Address" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-12 py-7 bg-gray-50 border-gray-100 focus:bg-white rounded-xl"
                />
              </div>

              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 py-8 text-xl font-bold rounded-xl shadow-lg">
                Send Reset Link
              </Button>

              <Link to="/login" className="flex items-center justify-center gap-2 text-green-600 font-bold hover:underline">
                <ArrowLeft className="h-5 w-5" /> Back to Login
              </Link>
            </form>
          ) : (
            <div className="text-center space-y-6 py-4">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-green-900">Check Your Email</h3>
              <p className="text-gray-600 leading-relaxed">
                We've sent a password reset link to <br /><span className="font-bold text-gray-900">{email}</span>. Please check your inbox and spam folder.
              </p>
              <Button onClick={() => setSubmitted(false)} variant="outline" className="w-full py-6 font-bold border-2">
                Try Another Email
              </Button>
              <Link to="/login" className="block text-green-600 font-bold hover:underline mt-4">
                Return to Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
