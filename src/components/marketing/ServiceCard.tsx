import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  href: string;
  icon?: React.ReactNode;
}

export default function ServiceCard({ title, description, features, href, icon }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg border-2 border-gray-200 p-6 hover:shadow-xl hover:border-yellow-300 transition-all duration-300">
      <div className="flex items-center mb-4">
        {icon && <div className="w-12 h-12 text-yellow-500 mr-4 p-2 bg-yellow-50 rounded-lg border border-yellow-200">{icon}</div>}
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      </div>
      
      <p className="text-gray-700 mb-4">{description}</p>
      
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-700">
            <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2 border border-yellow-600"></span>
            {feature}
          </li>
        ))}
      </ul>
      
      <Link
        href={href}
        className="inline-block w-full text-center bg-yellow-500 text-black px-4 py-2 rounded-lg font-medium hover:bg-yellow-400 active:scale-95 hover:scale-105 transition-all duration-200"
      >
        Learn More
      </Link>
    </div>
  );
}