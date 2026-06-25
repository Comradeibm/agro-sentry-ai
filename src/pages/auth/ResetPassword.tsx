import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Sprout, Lock, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    setSubmitted(true);
    toast.success("Password updated successfully!");
  };

  return (
    <div className="min-h-[calc(100vh-80px)] bg-green-50 flex items-center justify-center px-6 py-12">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-xl overflow-hidden border border-green-100">
        <div className="bg-green-600 p-8 text-white text-center">
          <Link to="/" className="inline-flex items-center space-x-2 mb-4">
            <Sprout className="h-8 w-8 text-green-200" />
            <span className="text-2xl font-bold">AgroGuard AI</span>
          </Link>
          <h2 className="text-3xl font-bold">New Password</h2>
        </div>
        
        <div className="p-8">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <p className="text-gray-600 text-center font-medium">
                Please enter a strong new password for your account.
              </p>
              <div className="space-y-4">
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input 
                    type="password" 
                    placeholder="New Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-12 py-7 bg-gray-50 border-gray-100 focus:bg-white rounded-xl"
                  />
                </div>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input 
                    type="password" 
                    placeholder="Confirm New Password" 
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="pl-12 py-7 bg-gray-50 border-gray-100 focus:bg-white rounded-xl"
                  />
                </div>
              </div>

              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 py-8 text-xl font-bold rounded-xl shadow-lg">
                Update Password
              </Button>
            </form>
          ) : (
            <div className="text-center space-y-6 py-4">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-green-900">All Set!</h3>
              <p className="text-gray-600 leading-relaxed">
                Your password has been updated. You can now login with your new credentials.
              </p>
              <Button onClick={() => navigate('/login')} className="w-full bg-green-600 hover:bg-green-700 py-8 text-xl font-bold rounded-xl shadow-lg">
                Go to Login <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
