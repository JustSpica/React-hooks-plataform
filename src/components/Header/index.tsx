import { FaReact } from 'react-icons/fa';

import { useAuth } from 'hooks';

export function Header() {
  const { user } = useAuth();

  return (
    <header
      className="w-full p-6 flex items-center justify-between 
    bg-gray-900 border-b-2 border-gray-800"
    >
      <span className="text-2xl font-bold flex items-center">
        <FaReact className="mr-2" size={24} />
        React Hooks
      </span>
      <div className="flex items-center space-x-4">
        <img src={user?.avatar} className="w-10 h-10 bg-white rounded-full" />
        <span className="font-bold">{user?.name}</span>
      </div>
    </header>
  );
}
