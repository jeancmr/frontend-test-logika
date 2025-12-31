interface SwitchProps {
  value: boolean;
  onChange: (value: boolean) => void;
}

export const Switch = ({ value, onChange }: SwitchProps) => {
  return (
    <label className="flex cursor-pointer select-none items-center">
      <div className="relative">
        <input
          type="checkbox"
          checked={value}
          onChange={() => onChange(!value)}
          className="sr-only"
        />

        <div
          className={`block h-6 w-12 rounded-full transition ${
            value ? 'bg-blue-600' : 'bg-gray-300'
          }`}
        ></div>

        <div
          className={`absolute top-1 h-4 w-4 rounded-full bg-white transition-transform duration-300 ${
            value ? 'translate-x-6' : 'translate-x-1'
          }`}
        ></div>
      </div>
    </label>
  );
};
