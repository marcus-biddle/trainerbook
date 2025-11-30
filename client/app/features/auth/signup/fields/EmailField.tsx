import type { BaseFieldProps } from "../../auth.types";

export const EmailField: React.FC<BaseFieldProps> = ({
  value,
  onChange,
  error,
}) => (
  <div className="space-y-1">
    <label
      htmlFor="email"
      className="block text-sm font-medium text-slate-700"
    >
      Email
    </label>
    <input
      id="email"
      type="email"
      value={value}
      onChange={onChange}
      className={`w-full rounded-lg border px-3 py-2 text-sm outline-none transition
        bg-white
        ${
          error
            ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500'
            : 'border-slate-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500'
        }`}
      placeholder="you@example.com"
      autoComplete="email"
    />
    {error && (
      <p className="text-xs text-red-600">{error}</p>
    )}
  </div>
);