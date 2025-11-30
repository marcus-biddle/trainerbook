import { useState } from "react";
import type { PasswordFieldProps } from "../../auth.types";

export const PasswordField: React.FC<PasswordFieldProps> = ({
  value,
  onChange,
  error,
}) => {
  const [show, setShow] = useState(false);

  return (
    <div className="space-y-1">
      <label
        htmlFor="password"
        className="block text-sm font-medium text-slate-700"
      >
        Password
      </label>
      <div className="relative">
        <input
          id="password"
          type={show ? 'text' : 'password'}
          value={value}
          onChange={onChange}
          className={`w-full rounded-lg border px-3 py-2 pr-20 text-sm outline-none transition
            bg-white
            ${
              error
                ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                : 'border-slate-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500'
            }`}
          placeholder="Create a password"
          autoComplete="new-password"
        />
        <button
          type="button"
          onClick={() => setShow(prev => !prev)}
          className="absolute inset-y-0 right-2 flex items-center px-2 text-xs font-medium text-slate-500 hover:text-slate-700"
        >
          {show ? 'Hide' : 'Show'}
        </button>
      </div>
      {error && (
        <p className="text-xs text-red-600">{error}</p>
      )}
    </div>
  );
};