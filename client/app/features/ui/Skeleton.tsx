import React from 'react';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Skeleton: React.FC<SkeletonProps> = ({ className = '', ...props }) => (
  <div
    className={`animate-pulse bg-gray-200 rounded-lg ${className}`}
    {...props}
  />
);