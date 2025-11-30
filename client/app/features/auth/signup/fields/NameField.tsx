import type { BaseFieldProps } from "../../auth.types";

export const NameField: React.FC<BaseFieldProps> = ({
  value,
  onChange,
  error,
}) => (
  <div className="space-y-1">
    <label
      htmlFor="name"
      className="block text-sm font-medium text-slate-700"
    >
      Name
    </label>
    <input
      id="name"
      type="text"
      value={value}
      onChange={onChange}
      className={`w-full rounded-lg border px-3 py-2 text-sm outline-none transition
        bg-white
        ${
          error
            ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500'
            : 'border-slate-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500'
        }`}
      placeholder="Your full name"
      autoComplete="name"
    />
    {error && (
      <p className="text-xs text-red-600">{error}</p>
    )}
  </div>
);