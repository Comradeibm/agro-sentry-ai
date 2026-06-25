import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  Sprout, 
  LayoutDashboard, 
  ScanLine, 
  Bug, 
  Lightbulb, 
  TrendingUp, 
  CloudRain, 
  BookOpen, 
  Users, 
  Headphones,
  LogOut,
  X
} from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { cn } from '@/lib/utils';

const Sidebar = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
    { name: 'Crop Diagnosis', icon: ScanLine, path: '/dashboard/crop-diagnosis' },
    { name: 'Pest Detection', icon: Bug, path: '/dashboard/pest-detection' },
    { name: 'Smart Advisor', icon: Lightbulb, path: '/dashboard/smart-advisor' },
    { name: 'Market Prices', icon: TrendingUp, path: '/dashboard/market-prices' },
    { name: 'Weather Alerts', icon: CloudRain, path: '/dashboard/weather' },
    { name: 'Farm Records', icon: BookOpen, path: '/dashboard/records' },
    { name: 'Community Forum', icon: Users, path: '/dashboard/forum' },
    { name: 'Expert Connect', icon: Headphones, path: '/dashboard/experts' },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed top-0 left-0 bottom-0 w-72 bg-white border-r border-green-100 z-50 transition-transform duration-300 transform lg:translate-x-0 flex flex-col shadow-2xl lg:shadow-none",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="h-20 flex items-center justify-between px-6 border-b border-green-50">
          <NavLink to="/dashboard" className="flex items-center space-x-2">
            <Sprout className="h-8 w-8 text-green-600" />
            <span className="text-xl font-bold text-green-900">AgroGuard AI</span>
          </NavLink>
          <button onClick={onClose} className="lg:hidden p-2 text-gray-400 hover:text-green-600">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6 flex-grow overflow-y-auto">
          <div className="mb-8 p-4 bg-green-50 rounded-2xl">
            <p className="text-xs font-bold text-green-600 uppercase tracking-widest mb-1">User Role</p>
            <p className="text-sm font-bold text-green-900">{user?.role || 'Farmer'}</p>
          </div>

          <nav className="space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => { if (window.innerWidth < 1024) onClose(); }}
                className={({ isActive }) => cn(
                  "flex items-center space-x-3 px-4 py-4 rounded-xl text-lg font-medium transition-all",
                  isActive 
                    ? "bg-green-600 text-white shadow-lg shadow-green-200" 
                    : "text-gray-500 hover:bg-green-50 hover:text-green-600"
                )}
              >
                <item.icon className="h-6 w-6 shrink-0" />
                <span>{item.name}</span>
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="p-6 border-t border-green-50">
          <button
            onClick={handleLogout}
            className="flex items-center space-x-3 w-full px-4 py-4 rounded-xl text-lg font-medium text-red-600 hover:bg-red-50 transition-colors"
          >
            <LogOut className="h-6 w-6" />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
