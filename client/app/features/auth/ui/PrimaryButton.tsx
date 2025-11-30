import type { PrimaryButtonProps } from "../auth.types";

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  className = '',
  ...rest
}) => (
  <button
    {...rest}
    className={`inline-flex w-full items-center justify-center rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-indigo-300 ${className}`}
  >
    {children}
  </button>
);