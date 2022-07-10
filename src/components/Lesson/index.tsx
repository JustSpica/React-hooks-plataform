import { useState } from 'react';
import * as BsIcons from 'react-icons/bs';
import { FiLock } from 'react-icons/fi';
import ptBR from 'date-fns/locale/pt-BR';
import { format, isPast } from 'date-fns';
import classNames from 'classnames';

export interface LessonProps {
  title: string;
  description: string;
  availableAt: Date;
  avatar: string;
}

export function Lesson({
  title,
  description,
  availableAt,
  avatar,
}: LessonProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const isLessonAvailable = isPast(availableAt);
  const availableDateFormated = format(availableAt, "HH:mm a 'em' d 'de'	MMMM", {
    locale: ptBR,
  });

  return (
    <div className="w-full relative flex items-center p-6 rounded-lg bg-slate-800">
      <img className="w-24 h-24 rounded-lg bg-slate-900" src={avatar} />
      <div className="ml-4 p-1">
        <strong>{title}</strong>
        <div className="mt-3">
          <p className="text-gray-400">{description}</p>
          <div className="flex items-center space-x-4 mt-1">
            <span className="flex items-center gap-2 text-sm text-gray-500">
              <BsIcons.BsClock size={18} />
              {availableDateFormated}
            </span>
            <span
              className={classNames(
                'flex items-center gap-2 text-sm text-emerald-500',
                {
                  'text-orange-500': !isLessonAvailable,
                },
              )}
            >
              {isLessonAvailable ? (
                <>
                  <BsIcons.BsCheckCircle size={18} />
                  Disponivel
                </>
              ) : (
                <>
                  <FiLock size={18} />
                  Em Breve
                </>
              )}
            </span>
          </div>
        </div>
      </div>
      <button className="absolute right-20 hover:text-gray-400 transition-colors">
        <BsIcons.BsPlayCircle size={24} />
      </button>
      <button
        className={classNames(
          'absolute right-6 hover:text-gray-400 transition-colors',
          {
            'text-red-700 hover:text-red-900': isFavorite,
          },
        )}
        onClick={() => setIsFavorite(!isFavorite)}
      >
        {isFavorite ? (
          <BsIcons.BsHeartFill size={24} />
        ) : (
          <BsIcons.BsHeart size={24} />
        )}
      </button>
    </div>
  );
}
