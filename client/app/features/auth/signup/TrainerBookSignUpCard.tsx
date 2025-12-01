// TrainerBookSignUpCard.tsx
import React, { useState } from 'react';
import type { SignUpFormErrors, SignUpFormValues, TrainerBookRole } from '../auth.types';
import { RoleSelector } from './RoleSelector/RoleSelector';
import { PrimaryButton } from '../../ui/PrimaryButton';
import { EmailField, NameField, PasswordField, TrainerInviteField } from './fields';

const initialValues: SignUpFormValues = {
  name: '',
  email: '',
  password: '',
  role: 'trainer',
  trainerInviteCode: '',
};

const TrainerBookSignUpCard: React.FC = () => {
  const [values, setValues] = useState<SignUpFormValues>(initialValues);
  const [errors, setErrors] = useState<SignUpFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange =
    (field: keyof SignUpFormValues) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setValues(prev => ({ ...prev, [field]: value }));
      setErrors(prev => ({ ...prev, [field]: undefined }));
    };

  const handleRoleChange = (role: TrainerBookRole) => {
    setValues(prev => ({
      ...prev,
      role,
      trainerInviteCode: role === 'trainer' ? '' : prev.trainerInviteCode,
    }));
    setErrors(prev => ({ ...prev, trainerInviteCode: undefined }));
  };

  const validate = (): boolean => {
    const nextErrors: SignUpFormErrors = {};

    if (!values.name.trim()) {
      nextErrors.name = 'Name is required.';
    }
    if (!values.email.trim()) {
      nextErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = 'Enter a valid email address.';
    }
    if (!values.password.trim()) {
      nextErrors.password = 'Password is required.';
    } else if (values.password.length < 8) {
      nextErrors.password = 'Password must be at least 8 characters.';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);

    // TODO: wire up to Supabase / API
    setTimeout(() => {
      setIsSubmitting(false);
      // handle success, navigation, etc.
    }, 800);
  };

  return (
    <div className="w-full max-w-md bg-white shadow-lg rounded-2xl px-6 py-8 sm:px-8">
      <header className="mb-6 text-center">
        <h1 className="text-2xl font-semibold text-slate-900">
          Create your TrainerBook account
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Choose your role to get the right experience.
        </p>
      </header>

      <form onSubmit={handleSubmit} className="space-y-4">
        <NameField
          value={values.name}
          onChange={handleChange('name')}
          error={errors.name}
        />

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

        <RoleSelector
          role={values.role}
          onChange={handleRoleChange}
        />

        {values.role === 'client' && (
          <TrainerInviteField
            value={values.trainerInviteCode ?? ''}
            onChange={handleChange('trainerInviteCode')}
            error={errors.trainerInviteCode}
          />
        )}

        <PrimaryButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Creating account...' : 'Create account'}
        </PrimaryButton>
      </form>

      <footer className="mt-6 text-center">
        <p className="text-sm text-slate-500">
          Already have an account?{' '}
          <a
            href="/login"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Log in
          </a>
        </p>
      </footer>
    </div>
  );
};

export default TrainerBookSignUpCard;