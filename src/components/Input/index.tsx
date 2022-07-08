import { InputHTMLAttributes, useState } from 'react';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isPassword?: boolean;
}

export function Input({ isPassword, ...props }: InputProps) {
  const [type, setType] = useState(props.type);
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  return (
    <div className="w-full relative flex items-center">
      <input
        className="peer w-full p-3 pr-16 relative bg-transparent border rounded-lg 
        outline-none focus:border-emerald-500 focus:text-emerald-500 
        focus:placeholder-emerald-500 transition-colors"
        type={type || (isPassword ? 'password' : type)}
        {...props}
      />
      {isPassword &&
        (isPasswordVisible ? (
          <BsFillEyeSlashFill
            size={18}
            className="absolute right-3 cursor-pointer peer-focus:text-emerald-500 transition-colors"
            onClick={() => {
              setType('password');
              setIsPasswordVisible(false);
            }}
          />
        ) : (
          <BsFillEyeFill
            size={18}
            className="absolute right-3 cursor-pointer peer-focus:text-emerald-500 transition-colors"
            onClick={() => {
              setType('text');
              setIsPasswordVisible(true);
            }}
          />
        ))}
    </div>
  );
}
