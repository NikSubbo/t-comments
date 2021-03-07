import React, { useState } from 'react';
import { AuthorList } from '../AuthorList';
import { CommentList } from '../CommentList';
import { getComments } from '../../api';
import styles from './Thread.module.css';

const comments = getComments();

export const Thread = () => {
  const [author, setAuthor] = useState('');

  const authorHandler = (val: string) => { if (val !== author) setAuthor(val) };

  return (
    <div className={styles.thread}>
      <AuthorList data={comments} authorHandler={authorHandler} />
      <CommentList data={comments} selectedAuthor={author} />
    </div>
  )
}
