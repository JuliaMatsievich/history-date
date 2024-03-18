import { FC } from 'react';
import styles from './slide.module.scss';

interface ISlideProps {
  year: string[];
}

export const Slide: FC<ISlideProps> = ({ year }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.firstYear}>{year[0]}</div>
        <div className={styles.secondYear}>{year[year.length - 1]}</div>
      </div>
    </>
  );
};
