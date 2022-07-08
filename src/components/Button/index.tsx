import { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  outline?: boolean;
}

export function Button({ children, outline, ...props }: ButtonProps) {
  return (
    <button
      className={classNames(
        'w-full p-3 bg-emerald-500 rounded-lg hover:bg-emerald-600 transition-colors',
        {
          '!bg-transparent text-emerald-500 border border-emerald-500 hover:!bg-emerald-500 hover:text-white':
            outline,
        },
      )}
      {...props}
    >
      {children}
    </button>
  );
}
