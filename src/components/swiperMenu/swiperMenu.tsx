import { FC } from 'react';

import { useSwiper } from 'swiper/react';

import { getCoordPoints } from '../../utils/helpFunc/getCoordPointsFunc';

import { IPoints } from '../../types/types';

import { slidesContent } from '../../utils/data';

import styles from './swiperMenu.module.scss';

interface ISwiperMenuProps {
  activeSlide: number;
}

export const SwiperMenu: FC<ISwiperMenuProps> = ({ activeSlide }) => {
  const radius = 265;
  const radiusPoint = 3;
  const radiusPointActive = 28;
  const swiper = useSwiper();
  const points: IPoints[] = getCoordPoints(radius, slidesContent.length);

  return (
    <>
      <div className={styles.wrapper}>
        {slidesContent.map((slide, index) => (
          <div
            onClick={() => {
              swiper.slideTo(index);
            }}
            key={index}
            className={activeSlide === index ? styles.item_active : styles.item}
            style={{
              top:
                activeSlide === index
                  ? points[index].y - radiusPointActive
                  : points[index].y - radiusPoint,
              left:
                activeSlide === index
                  ? points[index].x - radiusPointActive
                  : points[index].x - radiusPoint,
            }}
          >
            {activeSlide === index ? <p>{index + 1}</p> : null}
          </div>
        ))}
      </div>
    </>
  );
};
