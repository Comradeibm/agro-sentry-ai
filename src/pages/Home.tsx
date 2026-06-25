import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, ShieldCheck, Zap, TrendingUp, Users, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';

const Home = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-green-50 py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left space-y-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-bold animate-fade-in">
              <span className="mr-2">🌱</span> {t('hero_badge')}
            </div>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-green-900 leading-tight">
              {t('hero_title_1')} <span className="text-green-600 underline decoration-green-300">{t('hero_title_2')}</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {t('hero_desc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={() => navigate('/register')} 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-8 text-xl rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all"
              >
                {t('hero_cta')}
              </Button>
              <Button 
                variant="outline" 
                onClick={() => navigate('/about')}
                className="border-2 border-green-600 text-green-700 px-8 py-8 text-xl rounded-xl font-bold hover:bg-green-50 transition-all"
              >
                {t('hero_learn')}
              </Button>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="absolute -inset-4 bg-green-200/50 rounded-3xl blur-2xl -z-10 animate-pulse"></div>
            <img 
              src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/35f930e3-c538-4467-922d-6ecf408a56d8/hero-farmer-62c42540-1782386395633.webp" 
              alt="Nigerian Farmer using Sentinel AgroGuard AI" 
              className="rounded-3xl shadow-2xl border-8 border-white object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-900 mb-4">{t('features_title')}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">{t('features_desc')}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: Zap, title: "Crop Diagnosis", desc: "Snap a photo of your crop to identify diseases instantly with AI." },
            { icon: ShieldCheck, title: "Pest Detection", desc: "Identify harmful pests and get recommendations for safe control." },
            { icon: CheckCircle, title: "Smart Farm Advisor", desc: "AI-driven tips on planting, fertilization, and irrigation timing." },
            { icon: TrendingUp, title: "Market Prices", desc: "Daily updates on crop prices in your local and regional markets." },
            { icon: Users, title: "Expert Connect", desc: "Chat directly with certified agricultural extension officers." },
            { icon: MessageSquare, title: "Multilingual Support", desc: "Available in Hausa, Yoruba, Igbo, Pidgin, and English." }
          ].map((feature, i) => (
            <div key={i} className="p-8 border border-green-100 rounded-2xl bg-white hover:border-green-300 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
                <feature.icon className="h-8 w-8 text-green-600 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-green-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-green-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-16">{t('testimonials_title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: "Alhaji Musa", location: "Kano", quote: "The pest detection saved my maize crop this season. I knew exactly what to do." },
              { name: "Chidi Okafor", location: "Enugu", quote: "Getting market prices daily helped me sell my cassava at a much better profit." },
              { name: "Mrs. Funke", location: "Oyo", quote: "The Hausa voice tips are amazing. It's like having a teacher on my phone." }
            ].map((t2, i) => (
              <div key={i} className="bg-green-800/50 p-8 rounded-2xl backdrop-blur-sm border border-green-700">
                <p className="italic text-lg mb-6">"{t2.quote}"</p>
                <p className="font-bold text-green-400">{t2.name}</p>
                <p className="text-sm text-green-300">{t2.location}, Nigeria</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-3xl font-bold text-green-900">{t('contact_title')}</h2>
          <p className="text-xl text-gray-600">{t('contact_desc')}</p>
          <Button 
            variant="outline" 
            onClick={() => navigate('/contact')}
            className="border-2 border-green-600 text-green-700 px-8 py-6 text-lg rounded-xl font-bold"
          >
            {t('contact_btn')}
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
