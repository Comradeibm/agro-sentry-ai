import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'sonner';
import { AuthProvider } from './context/AuthContext';
import { LanguageProvider } from './context/LanguageContext';

// Layouts
import LayoutPublic from './components/layout/LayoutPublic';
import LayoutDashboard from './components/layout/LayoutDashboard';

// Public Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';

// Auth Pages
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';

// Dashboard Pages
import DashboardHome from './pages/dashboard/DashboardHome';
import PlaceholderPage from './pages/dashboard/PlaceholderPage';

function App() {
  return (
    <LanguageProvider><AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route element={<LayoutPublic />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
          </Route>

          {/* Protected Dashboard Routes */}
          <Route path="/dashboard" element={<LayoutDashboard />}>
            <Route index element={<DashboardHome />} />
            <Route path="crop-diagnosis" element={<PlaceholderPage />} />
            <Route path="pest-detection" element={<PlaceholderPage />} />
            <Route path="smart-advisor" element={<PlaceholderPage />} />
            <Route path="market-prices" element={<PlaceholderPage />} />
            <Route path="weather" element={<PlaceholderPage />} />
            <Route path="records" element={<PlaceholderPage />} />
            <Route path="forum" element={<PlaceholderPage />} />
            <Route path="experts" element={<PlaceholderPage />} />
          </Route>

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
      <Toaster position="top-center" richColors />
    </AuthProvider></LanguageProvider>
  );
}

export default App;
