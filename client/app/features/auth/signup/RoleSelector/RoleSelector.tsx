import type { RoleSelectorProps } from "../../auth.types";

export const RoleSelector: React.FC<RoleSelectorProps> = ({
  role,
  onChange,
}) => {
  const isTrainer = role === 'trainer';

  return (
    <div className="space-y-2">
      <span className="block text-sm font-medium text-slate-700">
        I am signing up as
      </span>
      <div className="grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={() => onChange('trainer')}
          className={`rounded-lg border px-3 py-2 text-sm font-medium transition
            ${
              isTrainer
                ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                : 'border-slate-300 bg-white text-slate-700 hover:border-slate-400'
            }`}
        >
          I’m a Trainer
        </button>
        <button
          type="button"
          onClick={() => onChange('client')}
          className={`rounded-lg border px-3 py-2 text-sm font-medium transition
            ${
              !isTrainer
                ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                : 'border-slate-300 bg-white text-slate-700 hover:border-slate-400'
            }`}
        >
          I’m a Client
        </button>
      </div>
    </div>
  );
};