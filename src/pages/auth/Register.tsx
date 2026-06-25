import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Sprout, Mail, Lock, User, ArrowRight, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth, UserRole } from '@/context/AuthContext';
import { toast } from 'sonner';

const Register = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<UserRole>('Farmer');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password || !name) {
      toast.error("Please fill in all fields");
      return;
    }
    // Simulate registration
    toast.success("Account created successfully!");
    toast.info("A verification email has been sent to your inbox.");
    
    // Auto-login for demo purposes
    login(email, role);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-[calc(100vh-80px)] bg-green-50 flex items-center justify-center px-6 py-12">
      <div className="bg-white w-full max-w-lg rounded-3xl shadow-xl overflow-hidden border border-green-100">
        <div className="bg-green-600 p-8 text-white text-center">
          <Link to="/" className="inline-flex items-center space-x-2 mb-2">
            <Sprout className="h-8 w-8 text-green-200" />
            <span className="text-2xl font-bold">AgroGuard AI</span>
          </Link>
          <h2 className="text-3xl font-bold">Join the Platform</h2>
          <p className="text-green-100 mt-2">Start your journey to better farming today</p>
        </div>
        
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700">I am joining as a:</label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: 'Farmer', label: 'Farmer', icon: Sprout },
                { id: 'Agricultural Expert', label: 'Expert', icon: Shield }
              ].map((r) => (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => setRole(r.id as UserRole)}
                  className={`flex flex-col items-center py-4 rounded-xl text-sm font-bold border-2 transition-all gap-2 ${role === r.id ? 'border-green-600 bg-green-50 text-green-700 shadow-md' : 'border-gray-100 text-gray-500 hover:border-green-200'}`}
                >
                  <r.icon className={`h-6 w-6 ${role === r.id ? 'text-green-600' : 'text-gray-400'}`} />
                  {r.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input 
                placeholder="Full Name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="pl-12 py-7 bg-gray-50 border-gray-100 focus:bg-white rounded-xl"
              />
            </div>
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
                placeholder="Create Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-12 py-7 bg-gray-50 border-gray-100 focus:bg-white rounded-xl"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 px-1">
            <input type="checkbox" required className="w-5 h-5 rounded border-gray-300 text-green-600 focus:ring-green-500" />
            <span className="text-sm text-gray-500">I agree to the <Link to="#" className="text-green-600 font-bold">Terms of Service</Link> and <Link to="#" className="text-green-600 font-bold">Privacy Policy</Link></span>
          </div>

          <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 py-8 text-xl font-bold rounded-xl shadow-lg group">
            Create Account <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </Button>

          <div className="text-center text-gray-500 font-medium">
            Already have an account? <Link to="/login" className="text-green-600 font-bold hover:underline">Login Instead</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
