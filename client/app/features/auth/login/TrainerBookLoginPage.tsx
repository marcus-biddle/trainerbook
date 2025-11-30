import React from 'react';
import { TrainerBookLoginCard } from './TrainerBookLoginCard';

export const TrainerBookLoginPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <TrainerBookLoginCard />
    </div>
  );
};

export default TrainerBookLoginPage;