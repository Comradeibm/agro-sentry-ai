import React from 'react';
import { useLocation } from 'react-router-dom';
import { Construction, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const PlaceholderPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pageName = location.pathname.split('/').pop()?.replace(/-/g, ' ') || 'Feature';

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-8 bg-white rounded-3xl border border-green-50 shadow-sm">
      <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-8">
        <Construction className="h-12 w-12 text-green-600" />
      </div>
      <h1 className="text-3xl font-extrabold text-green-900 mb-4 capitalize">
        {pageName}
      </h1>
      <p className="text-xl text-gray-600 max-w-lg mb-10">
        We're working hard to bring the <span className="font-bold text-green-600">{pageName}</span> tool to your farm. This feature will be available in the next update!
      </p>
      <Button 
        onClick={() => navigate('/dashboard')}
        className="bg-green-600 hover:bg-green-700 px-8 py-6 text-lg font-bold rounded-xl shadow-lg"
      >
        <ArrowLeft className="mr-2 h-5 w-5" /> Back to Dashboard
      </Button>
    </div>
  );
};

export default PlaceholderPage;
