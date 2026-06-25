import React, { useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { Menu, Bell, Search, User as UserIcon } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import Sidebar from './Sidebar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const LayoutDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen bg-green-50/30 flex">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <div className="flex-grow flex flex-col lg:ml-72 transition-all duration-300">
        <header className="h-20 bg-white border-b border-green-50 flex items-center justify-between px-6 sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 text-gray-500 hover:text-green-600"
            >
              <Menu className="h-6 w-6" />
            </button>
            <div className="hidden sm:flex items-center relative w-64 md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input 
                placeholder="Search farm records, experts..." 
                className="pl-10 bg-gray-50 border-none focus:ring-1 focus:ring-green-200 rounded-full"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2 text-gray-500 hover:text-green-600 transition-colors">
              <Bell className="h-6 w-6" />
              <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full"></span>
            </button>
            <div className="h-10 w-[1px] bg-gray-100 mx-2 hidden sm:block"></div>
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="hidden sm:block text-right">
                <p className="text-sm font-bold text-gray-900">{user?.name}</p>
                <p className="text-xs text-gray-500">{user?.role}</p>
              </div>
              <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center border-2 border-white shadow-sm overflow-hidden">
                <UserIcon className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>
        </header>

        <main className="p-6 lg:p-10 flex-grow">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default LayoutDashboard;
