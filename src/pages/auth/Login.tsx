import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Sprout, Mail, Lock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth, UserRole } from '@/context/AuthContext';
import { toast } from 'sonner';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<UserRole>('Farmer');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }
    login(email, role);
    toast.success("Welcome back to AgroGuard AI!");
    navigate('/dashboard');
  };

  return (
    <div className="min-h-[calc(100vh-80px)] bg-green-50 flex items-center justify-center px-6 py-12">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-xl overflow-hidden border border-green-100">
        <div className="bg-green-600 p-8 text-white text-center">
          <Link to="/" className="inline-flex items-center space-x-2 mb-4">
            <Sprout className="h-8 w-8 text-green-200" />
            <span className="text-2xl font-bold">AgroGuard AI</span>
          </Link>
          <h2 className="text-3xl font-bold">Login</h2>
          <p className="text-green-100 mt-2">Welcome back to your farm</p>
        </div>
        
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700">Account Type</label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setRole('Farmer')}
                className={`py-3 rounded-xl text-sm font-bold border-2 transition-all ${role === 'Farmer' ? 'border-green-600 bg-green-50 text-green-700' : 'border-gray-100 text-gray-500 hover:border-green-200'}`}
              >
                Farmer
              </button>
              <button
                type="button"
                onClick={() => setRole('Agricultural Expert')}
                className={`py-3 rounded-xl text-sm font-bold border-2 transition-all ${role === 'Agricultural Expert' ? 'border-green-600 bg-green-50 text-green-700' : 'border-gray-100 text-gray-500 hover:border-green-200'}`}
              >
                Expert
              </button>
            </div>
          </div>

          <div className="space-y-4">
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
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input 
                type="password" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-12 py-7 bg-gray-50 border-gray-100 focus:bg-white rounded-xl"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <Link to="/forgot-password" className="text-green-600 font-bold hover:underline text-sm">
              Forgot Password?
            </Link>
          </div>

          <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 py-8 text-xl font-bold rounded-xl shadow-lg group">
            Login <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </Button>

          <div className="text-center text-gray-500 font-medium">
            Don't have an account? <Link to="/register" className="text-green-600 font-bold hover:underline">Register Here</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
