import { FC } from 'react';

import { IFacts } from '../../../types/types';

import { SlidersFacts } from '../slidersFacts/slidersFacts';

import styles from './slide.module.scss';

interface ISlideProps {
  facts: IFacts[];
}

export const Slide: FC<ISlideProps> = ({ facts }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.firstYear}>{facts[0].year}</div>
        <div className={styles.secondYear}>{facts[facts.length - 1].year}</div>
      </div>
      <SlidersFacts facts={facts} />
    </>
  );
};
