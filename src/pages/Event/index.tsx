import { Header, Lesson } from 'components';

import { useLessons } from 'graphql/queries/useLessons';

export function Event() {
  const { data } = useLessons();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 p-24">
        <h1 className="text-2xl font-bold">Todas as aulas sobre hooks</h1>
        <div className="flex gap-8 mt-12">
          <div className="flex-1 space-y-8">
            {data?.lessons.map(lesson => (
              <Lesson
                key={lesson.id}
                title={lesson.title}
                description={lesson.description}
                availableAt={new Date(lesson.availableAt)}
                avatar={lesson.avatar.url}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
