import type { IComment } from '../api';

const authorsList: string[] = [];
export const getAuthors = (data: IComment[]) => {
  data.forEach(el => {
    if (!authorsList.includes(el.author)) authorsList.push(el.author);
    if (el.comments.length > 0) getAuthors(el.comments);
  })
  return authorsList;
}
