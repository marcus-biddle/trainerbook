import React from 'react';
import type { LinkProps } from 'react-router-dom';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'lg';
  asChild?: boolean;
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'default', size = 'sm', children, asChild = false, href, ...props }, ref) => {
    const baseClasses = "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
    
    const variants = {
      default: "bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg hover:shadow-xl",
      outline: "border border-indigo-200 bg-white/50 hover:bg-indigo-50 text-indigo-700 hover:text-indigo-900",
      ghost: "hover:bg-indigo-100 text-gray-700 hover:text-gray-900"
    };

    const sizes = {
      sm: "h-10 px-4 py-2 text-sm",
      lg: "h-12 px-8 py-3 text-base"
    };

    const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

    if (asChild && href) {
      return (
        <Link to={href} className={classes} {...props}>
          {children}
        </Link>
      );
    }

    return (
      <button className={classes} ref={ref} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
