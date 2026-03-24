import type { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helpText?: string;
}

export default function Input({
  label,
  error,
  helpText,
  id,
  className = '',
  ...props
}: InputProps) {
  return (
    <div className={`space-y-1 w-full ${className}`}>
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {label}
        </label>
      )}
      <input
        id={id}
        className={`w-full px-3 py-2 rounded-lg border transition-colors focus:outline-none focus:ring-2 dark:bg-gray-800 dark:text-gray-100 ${
          error
            ? "border-error focus:ring-error"
            : "border-gray-300 focus:ring-primary"
        } ${
          props.disabled
            ? "bg-gray-100 cursor-not-allowed dark:bg-gray-700"
            : "bg-white dark:bg-gray-800"
        }`}
        aria-describedby={
          error ? `${id}-error` : helpText ? `${id}-help` : undefined
        }
        {...props}
      />
      {error && (
        <p id={`${id}-error`} role="alert" className="text-sm text-error dark:text-red-400">
          {error}
        </p>
      )}
      {helpText && !error && (
        <p id={`${id}-help`} className="text-sm text-gray-500 dark:text-gray-400">
          {helpText}
        </p>
      )}
    </div>
  );
}
