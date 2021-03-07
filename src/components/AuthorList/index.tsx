import React, { FC } from 'react';
import { getAuthors } from '../../helpers';
import type { IComment } from '../../api';
import styles from './AuthorList.module.css';

interface IAuthorList {
  data: IComment[];
  authorHandler: (val: string) => void;
}

export const AuthorList: FC<IAuthorList> = ({ data, authorHandler }) => {
  const authorsList = getAuthors(data);
  const clickHandler = (param: string) => (e: React.MouseEvent) => {
    authorHandler(param);
  }

  return (
    <div className={styles.authorList}>
      <div className={styles.title}>Authors list:</div>
      {authorsList.map(author =>
        <div key={author} onClick={clickHandler(author)} className={styles.author}>
          {author}
        </div>
      )}
    </div>
  )
}
