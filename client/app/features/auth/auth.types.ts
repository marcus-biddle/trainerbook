export type TrainerBookRole = 'trainer' | 'client';

export interface SignUpFormValues {
  name: string;
  email: string;
  password: string;
  role: TrainerBookRole;
  trainerInviteCode?: string;
}

export interface SignUpFormErrors {
  name?: string;
  email?: string;
  password?: string;
  trainerInviteCode?: string;
}

export interface BaseFieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

export interface PasswordFieldProps extends BaseFieldProps {}

export interface TrainerInviteFieldProps extends BaseFieldProps {}

export interface RoleSelectorProps {
  role: TrainerBookRole;
  onChange: (role: TrainerBookRole) => void;
}

export interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export interface LoginFormValues {
  email: string;
  password: string;
}

export interface LoginFormErrors {
  email?: string;
  password?: string;
}