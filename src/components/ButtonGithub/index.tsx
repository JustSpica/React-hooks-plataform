import { ButtonHTMLAttributes } from 'react';

export interface ButtonGithubProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function ButtonGithub(props: ButtonGithubProps) {
  return (
    <button
      className="w-full mt-6 p-3 flex items-center justify-center bg-[#333] 
      rounded-lg hover:bg-[#262626] transition-colors"
      {...props}
    >
      {props.children}
    </button>
  );
}
