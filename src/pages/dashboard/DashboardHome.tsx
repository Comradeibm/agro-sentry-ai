import React from 'react';
import { 
  Sprout,
  ScanLine, 
  CloudRain, 
  TrendingUp, 
  MessageCircle, 
  ChevronRight,
  Plus,
  ArrowUpRight
} from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';

const DashboardHome = () => {
  const { user } = useAuth();

  const stats = [
    { label: 'Farm Productivity', value: '+12%', icon: TrendingUp, color: 'text-green-600', bg: 'bg-green-100' },
    { label: 'Weather Today', value: 'Sunny, 32°C', icon: CloudRain, color: 'text-blue-600', bg: 'bg-blue-100' },
    { label: 'Market Prices', value: 'High Demand', icon: TrendingUp, color: 'text-orange-600', bg: 'bg-orange-100' },
    { label: 'Unread Alerts', value: '4 New', icon: MessageCircle, color: 'text-purple-600', bg: 'bg-purple-100' },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-green-900">Welcome, {user?.name}! 👋</h1>
          <p className="text-gray-600 text-lg">Here's what's happening on your farm today.</p>
        </div>
        <Button className="bg-green-600 hover:bg-green-700 h-14 px-8 text-lg font-bold rounded-2xl shadow-lg">
          <Plus className="mr-2 h-6 w-6" /> New Diagnosis
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl border border-green-50 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className={stat.bg + " p-3 rounded-2xl"}>
                <stat.icon className={"h-6 w-6 " + stat.color} />
              </div>
              <span className="text-gray-400"><ArrowUpRight className="h-5 w-5" /></span>
            </div>
            <p className="text-gray-500 font-medium">{stat.label}</p>
            <p className="text-2xl font-extrabold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-3xl border border-green-50 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-50 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">Recent AI Crop Insights</h2>
              <button className="text-green-600 font-bold flex items-center gap-1 hover:underline">
                View All <ChevronRight className="h-4 w-4" />
              </button>
            </div>
            <div className="divide-y divide-gray-50">
              {[
                { crop: 'Maize Field A', diagnosis: 'Healthy', date: '2 hours ago', status: 'Optimal' },
                { crop: 'Cassava Plot B', diagnosis: 'Early Blight Detected', date: 'Yesterday', status: 'Action Required', urgent: true },
                { crop: 'Tomato Greenhouse', diagnosis: 'Nutrient Deficiency', date: '3 days ago', status: 'Warning' },
              ].map((item, i) => (
                <div key={i} className="p-6 flex items-center justify-between hover:bg-green-50/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${item.urgent ? 'bg-red-100' : 'bg-green-100'}`}>
                      <ScanLine className={`h-6 w-6 ${item.urgent ? 'text-red-600' : 'text-green-600'}`} />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{item.crop}</p>
                      <p className="text-sm text-gray-500">{item.diagnosis}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`text-sm font-bold ${item.urgent ? 'text-red-600' : 'text-green-600'}`}>{item.status}</p>
                    <p className="text-xs text-gray-400">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-green-900 rounded-3xl p-8 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Smart Farm Tip</h3>
              <p className="text-green-100 leading-relaxed mb-6">
                Based on current weather data for Abuja, we recommend mulching your pepper crops this evening to retain moisture during the tomorrow's heatwave.
              </p>
              <Button className="w-full bg-white text-green-900 hover:bg-green-50 font-bold py-6 rounded-xl">
                Read Full Guide
              </Button>
            </div>
            <img 
              src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/35f930e3-c538-4467-922d-6ecf408a56d8/crop-diagnosis-ai-20654466-1782386396405.webp" 
              className="absolute -bottom-10 -right-10 h-40 w-40 object-cover rounded-full opacity-20"
            />
          </div>

          <div className="bg-white rounded-3xl border border-green-50 shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Weather Alerts</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-blue-50 border border-blue-100">
                <CloudRain className="h-8 w-8 text-blue-600" />
                <div>
                  <p className="font-bold text-blue-900">Heavy Rain Likely</p>
                  <p className="text-xs text-blue-700">Expected in 48 hours. Secure harvests.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
