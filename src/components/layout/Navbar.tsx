import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Sprout, Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { useLanguage, languageNames, Language } from '@/context/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const { language, setLanguage, t } = useLanguage();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-white border-b border-green-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Sprout className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-green-900 tracking-tight">Sentinel AgroGuard AI</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-green-600 font-medium transition-colors">{t('nav_home')}</Link>
            <Link to="/about" className="text-gray-600 hover:text-green-600 font-medium transition-colors">{t('nav_about')}</Link>
            <Link to="/pricing" className="text-gray-600 hover:text-green-600 font-medium transition-colors">{t('nav_pricing')}</Link>
            <Link to="/contact" className="text-gray-600 hover:text-green-600 font-medium transition-colors">{t('nav_contact')}</Link>
            
            <div className="flex items-center space-x-4 ml-4 border-l pl-8 border-gray-100">
              {user ? (
                <>
                  <Link to="/dashboard" className="text-green-700 font-semibold hover:text-green-800">{t('nav_dashboard')}</Link>
                  <Button variant="outline" onClick={handleLogout} className="border-green-600 text-green-600 hover:bg-green-50">
                    {t('nav_logout')}
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/login" className="text-gray-600 hover:text-green-600 font-medium">{t('nav_login')}</Link>
                  <Button onClick={() => navigate('/register')} className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-bold shadow-md hover:shadow-lg transition-all">
                    {t('nav_register')}
                  </Button>
                </>
              )}
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4 text-gray-500" />
                <select 
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as Language)}
                  className="bg-transparent text-sm font-medium text-gray-700 hover:text-green-600 cursor-pointer focus:outline-none pr-2"
                >
                  {(Object.keys(languageNames) as Language[]).map((lang) => (
                    <option key={lang} value={lang}>{languageNames[lang]}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-green-600 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-6 space-y-1 shadow-lg">
          <Link to="/" className="block px-3 py-4 text-lg font-medium text-gray-700 hover:bg-green-50 rounded-md">{t('nav_home')}</Link>
          <Link to="/about" className="block px-3 py-4 text-lg font-medium text-gray-700 hover:bg-green-50 rounded-md">{t('nav_about')}</Link>
          <Link to="/pricing" className="block px-3 py-4 text-lg font-medium text-gray-700 hover:bg-green-50 rounded-md">{t('nav_pricing')}</Link>
          <Link to="/contact" className="block px-3 py-4 text-lg font-medium text-gray-700 hover:bg-green-50 rounded-md">{t('nav_contact')}</Link>
          <div className="pt-4 border-t border-gray-100 flex flex-col space-y-3">
            {user ? (
              <>
                <Link to="/dashboard" className="block px-3 py-4 text-center text-lg font-bold text-green-700 bg-green-50 rounded-md">{t('nav_dashboard')}</Link>
                <Button variant="outline" onClick={handleLogout} className="w-full py-6 text-lg border-2">{t('nav_logout')}</Button>
              </>
            ) : (
              <>
                <Link to="/login" className="block px-3 py-4 text-center text-lg font-medium text-gray-700 hover:bg-gray-50 rounded-md">{t('nav_login')}</Link>
                <Button onClick={() => navigate('/register')} className="w-full py-6 text-lg bg-green-600 hover:bg-green-700 text-white font-bold">{t('nav_register')}</Button>
              </>
            )}
            <div className="flex items-center justify-center space-x-2 pt-3">
              <Globe className="h-4 w-4 text-gray-500" />
              <select 
                value={language}
                onChange={(e) => setLanguage(e.target.value as Language)}
                className="bg-transparent text-sm font-medium text-gray-700 cursor-pointer focus:outline-none"
              >
                {(Object.keys(languageNames) as Language[]).map((lang) => (
                  <option key={lang} value={lang}>{languageNames[lang]}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
