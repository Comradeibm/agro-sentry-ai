import React from 'react';
import { Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Pricing = () => {
  const navigate = useNavigate();

  const plans = [
    {
      name: "Free Plan",
      price: "₦0",
      description: "Perfect for smallholder subsistence farmers.",
      features: [
        "Basic Crop Diagnosis (5/month)",
        "Daily Weather Alerts",
        "Market Price Updates",
        "Community Forum Access",
        "English Support"
      ],
      notIncluded: [
        "Expert Voice Consultation",
        "Pest Detection AI",
        "Smart Farm Records",
        "Priority Support"
      ],
      cta: "Get Started",
      highlighted: false
    },
    {
      name: "Premium Plan",
      price: "₦2,500",
      period: "/month",
      description: "Ideal for growing commercial farmers.",
      features: [
        "Unlimited Crop Diagnosis",
        "Advanced Pest Detection AI",
        "Unlimited Weather Alerts",
        "Expert Voice Consultation",
        "Local Language Support",
        "Smart Farm Records"
      ],
      notIncluded: [
        "Multiple Farm Management",
        "API Integration"
      ],
      cta: "Upgrade Now",
      highlighted: true
    },
    {
      name: "Business Plan",
      price: "Custom",
      description: "Tailored for Cooperatives and Large Farms.",
      features: [
        "Everything in Premium",
        "Multiple Farm Management",
        "Team Management",
        "Bulk Data Exports",
        "Dedicated Account Manager",
        "Custom AI Training"
      ],
      notIncluded: [],
      cta: "Contact Sales",
      highlighted: false
    }
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="mb-20">
          <h1 className="text-4xl font-extrabold text-green-900 mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that best fits your farming needs. No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`p-10 rounded-3xl border-2 flex flex-col ${
                plan.highlighted 
                ? 'border-green-600 bg-green-50 shadow-xl scale-105 relative' 
                : 'border-gray-100 hover:border-green-200'
              }`}
            >
              {plan.highlighted && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-600 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest">
                  Most Popular
                </span>
              )}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-green-900 mb-2">{plan.name}</h3>
                <div className="flex items-center justify-center gap-1">
                  <span className="text-4xl font-extrabold text-green-900">{plan.price}</span>
                  {plan.period && <span className="text-gray-500">{plan.period}</span>}
                </div>
                <p className="text-gray-600 mt-4">{plan.description}</p>
              </div>

              <div className="flex-grow space-y-4 mb-10 text-left">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-600 shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
                {plan.notIncluded.map((feature, j) => (
                  <div key={j} className="flex items-center gap-3 opacity-50">
                    <X className="h-5 w-5 text-gray-400 shrink-0" />
                    <span className="text-gray-500 line-through">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                onClick={() => navigate('/register')}
                className={`w-full py-8 text-xl font-bold rounded-xl ${
                  plan.highlighted 
                  ? 'bg-green-600 hover:bg-green-700 shadow-lg' 
                  : 'bg-white border-2 border-green-600 text-green-600 hover:bg-green-50'
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
