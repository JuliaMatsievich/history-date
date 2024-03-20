import { FC } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { IFacts } from '../../../types/types';

import styles from './sliderFacts.module.scss';

interface ISlidersFactsProps {
  facts: IFacts[];
}

export const SlidersFacts: FC<ISlidersFactsProps> = ({ facts }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <Swiper navigation modules={[Navigation]} slidesPerView={3}>
          {facts.map((fact) => (
            <SwiperSlide key={fact.id}>
              <div className={styles.container}>
                <div className={styles.year}>{fact.year}</div>
                <div className={styles.fact}>{fact.fact}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
