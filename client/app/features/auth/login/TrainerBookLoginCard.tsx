// features/auth/login/TrainerBookLoginCard.tsx
import React, { useState } from 'react';
import type { LoginFormErrors, LoginFormValues } from '../auth.types';
import { EmailField, PasswordField } from '../signup/fields';
import { PrimaryButton } from '../ui/PrimaryButton';

const initialValues: LoginFormValues = {
  email: '',
  password: '',
};

export const TrainerBookLoginCard: React.FC = () => {
  const [values, setValues] = useState<LoginFormValues>(initialValues);
  const [errors, setErrors] = useState<LoginFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange =
    (field: keyof LoginFormValues) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setValues(prev => ({ ...prev, [field]: value }));
      setErrors(prev => ({ ...prev, [field]: undefined }));
    };

  const validate = (): boolean => {
    const nextErrors: LoginFormErrors = {};

    if (!values.email.trim()) {
      nextErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = 'Enter a valid email address.';
    }
    if (!values.password.trim()) {
      nextErrors.password = 'Password is required.';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);

    // TODO: wire up to Supabase auth.signInWithPassword
    setTimeout(() => {
      setIsSubmitting(false);
      // navigate to dashboard or home
    }, 800);
  };

  return (
    <div className="w-full max-w-md bg-white shadow-lg rounded-2xl px-6 py-8 sm:px-8">
      <header className="mb-6 text-center">
        <h1 className="text-2xl font-semibold text-slate-900">
          Welcome back to TrainerBook
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Sign in to your account
        </p>
      </header>

      <form onSubmit={handleSubmit} className="space-y-4">
        <EmailField
          value={values.email}
          onChange={handleChange('email')}
          error={errors.email}
        />

        <PasswordField
          value={values.password}
          onChange={handleChange('password')}
          error={errors.password}
        />

        <PrimaryButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Signing in...' : 'Sign in'}
        </PrimaryButton>
      </form>

      <footer className="mt-6 text-center">
        <p className="text-sm text-slate-500">
          Don't have an account?{' '}
          <a href="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
            Sign up
          </a>
        </p>
      </footer>
    </div>
  );
};
