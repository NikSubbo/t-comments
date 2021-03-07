import React, { FC } from 'react';
import { CommentList } from '../CommentList';
import type { IComment } from '../../api';
import styles from './Comment.module.css';

interface ICommentProps {
  data: IComment;
  selectedAuthor: string;
}

export const Comment: FC<ICommentProps> = ({ data, selectedAuthor }) => {
  const { author, message, comments } = data;

  let commentCls = styles.comment, subCommentCls = styles.subComment;
  if (selectedAuthor === author) {
    commentCls = `${styles.comment} ${styles.highlighted}`;
    subCommentCls = `${styles.subComment} ${styles.highlighted}`;
  }

  return (
    <>
      <div className={styles.author}>{author}</div>
      <div className={commentCls}>{message}</div>
      <div className={subCommentCls}>
        {comments.length > 0 && <CommentList data={comments} selectedAuthor={selectedAuthor} />}
      </div >
    </>
  )
}
