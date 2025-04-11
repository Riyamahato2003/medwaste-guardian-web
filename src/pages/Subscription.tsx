
import React, { useState } from 'react';
import { CheckIcon } from 'lucide-react';

interface PlanType {
  name: string;
  monthlyPriceINR: string;
  monthlyPriceUSD: string;
  yearlyPriceINR: string;
  yearlyPriceUSD: string;
  discount: string;
  bestFor: string;
  features: string[];
  highlighted?: boolean;
}

const plans: PlanType[] = [
  {
    name: 'Basic',
    monthlyPriceINR: '₹499',
    monthlyPriceUSD: '$6',
    yearlyPriceINR: '₹2,999',
    yearlyPriceUSD: '$36',
    discount: '30%',
    bestFor: 'Individual nurses',
    features: [
      'Single user access',
      'Basic waste classification',
      'Text & speech input',
      'Standard recommendations',
      'Email support'
    ]
  },
  {
    name: 'Standard',
    monthlyPriceINR: '₹1,499',
    monthlyPriceUSD: '$18',
    yearlyPriceINR: '₹10,999',
    yearlyPriceUSD: '$132',
    discount: '25%',
    bestFor: 'Clinics or PHCs',
    features: [
      'Up to 10 users',
      'Advanced waste classification',
      'All input methods',
      'Personalized recommendations',
      'Priority support',
      'Basic analytics',
      'Staff training resources'
    ],
    highlighted: true
  },
  {
    name: 'Enterprise',
    monthlyPriceINR: '₹4,999',
    monthlyPriceUSD: '$60',
    yearlyPriceINR: '₹34,999',
    yearlyPriceUSD: '$420',
    discount: '30%',
    bestFor: 'Hospitals, NGOs, health orgs',
    features: [
      'Unlimited users',
      'Advanced waste classification',
      'All input methods',
      'Custom recommendations',
      '24/7 dedicated support',
      'Advanced analytics dashboard',
      'Training resources & workshops',
      'API access',
      'Custom integrations'
    ]
  }
];

const Subscription = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <div className="min-h-screen pt-20 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Subscription Plans
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your needs
          </p>
          <div className="h-1 w-20 bg-medical-primary mx-auto mt-6"></div>
        </div>
        
        <div className="flex justify-center mb-10">
          <div className="bg-gray-100 p-1 rounded-lg inline-flex">
            <button
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                billingCycle === 'monthly'
                  ? 'bg-white shadow-sm text-gray-800'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly
            </button>
            <button
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                billingCycle === 'yearly'
                  ? 'bg-white shadow-sm text-gray-800'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
              onClick={() => setBillingCycle('yearly')}
            >
              Yearly
              <span className="ml-1 text-xs font-bold text-medical-primary">SAVE</span>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={plan.highlighted ? "pricing-card-highlighted" : "pricing-card"}>
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-medical-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                  Recommended
                </div>
              )}
              
              <h3 className="text-xl font-bold text-gray-800 mb-2">{plan.name}</h3>
              <p className="text-sm text-gray-500 mb-6">Best for {plan.bestFor}</p>
              
              <div className="mb-6">
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-bold text-gray-800">
                    {billingCycle === 'monthly' ? plan.monthlyPriceINR : plan.yearlyPriceINR}
                  </span>
                  <span className="text-gray-500 text-sm mb-1">
                    / {billingCycle === 'monthly' ? 'month' : 'year'}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  {billingCycle === 'monthly' ? plan.monthlyPriceUSD : plan.yearlyPriceUSD}
                </p>
                
                {billingCycle === 'yearly' && (
                  <div className="text-sm text-medical-primary font-medium mt-2">
                    Save {plan.discount} with annual billing
                  </div>
                )}
              </div>
              
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <CheckIcon className="mr-2 h-5 w-5 text-medical-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                className={`medical-button w-full ${
                  plan.highlighted 
                    ? 'bg-medical-primary text-white' 
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                Subscribe Now
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-16 medical-card max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">Can I switch plans later?</h3>
              <p className="text-gray-600">
                Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">Do you offer discounts for non-profits?</h3>
              <p className="text-gray-600">
                Yes, we offer special pricing for non-profit organizations. Please contact our sales team for more details.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">
                We accept all major credit cards, UPI payments, and bank transfers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
