import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  features: string[];
  isPopular?: boolean;
}

export default function PricingCard({ title, price, period, features, isPopular }: PricingCardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-sm border-2 p-6 relative ${
      isPopular ? 'border-blue-800 ring-2 ring-blue-100' : 'border-gray-100'
    }`}>
      {isPopular && (
        <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-800 text-white px-4 py-1 rounded-full text-sm font-medium">
          Mais Popular
        </span>
      )}
      
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <div className="mb-4">
          <span className="text-3xl font-bold text-gray-900">{price}</span>
          <span className="text-gray-600">/{period}</span>
        </div>
      </div>
      
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
            <span className="text-sm text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button 
        className={`w-full ${
          isPopular 
            ? 'bg-blue-800 hover:bg-blue-900 text-white' 
            : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
        }`}
      >
        Assinar {title}
      </Button>
    </div>
  );
}