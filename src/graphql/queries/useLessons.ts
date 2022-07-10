import { gql, useQuery } from '@apollo/client';

export interface GetLessonsResponse {
  lessons: {
    availableAt: string;
    id: string;
    slug: string;
    title: string;
    description: string;
    avatar: {
      url: string;
    };
  }[];
}

const GetLessons = gql`
  query {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      availableAt
      id
      slug
      description
      title
      avatar {
        url
      }
    }
  }
`;

export function useLessons() {
  const response = useQuery<GetLessonsResponse>(GetLessons);

  return response;
}
