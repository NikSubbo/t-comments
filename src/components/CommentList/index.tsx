import React, { FC } from 'react';
import { Comment } from '../Comment';
import type { IComment } from '../../api';

interface ICommentList {
  data: IComment[];
  selectedAuthor: string;
}

export const CommentList: FC<ICommentList> = ({ data, selectedAuthor }) => {
  return (
    <>
      {data.map((el, i) => <Comment key={el.author + el.message + i} data={el} selectedAuthor={selectedAuthor} />)}
    </>
  )
}
