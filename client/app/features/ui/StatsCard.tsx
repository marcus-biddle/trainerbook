import React from 'react';
import { Button } from './Button';

interface StatsCardProps {
  title: string;
  value: number;
  action?: string;
  href?: string;
}

export const StatsCard: React.FC<StatsCardProps> = ({ title, value, action, href }) => (
  <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50">
    <div className="flex justify-between items-start mb-2">
      <h3 className="text-sm font-medium text-gray-600 uppercase tracking-wide">{title}</h3>
    </div>
    <div className="flex items-baseline justify-between">
      <span className="text-3xl sm:text-4xl font-bold text-gray-900">{value}</span>
      {action && (
        <Button variant="outline" size="sm" className="ml-4" asChild href={href}>
          {action}
        </Button>
      )}
    </div>
  </div>
);
