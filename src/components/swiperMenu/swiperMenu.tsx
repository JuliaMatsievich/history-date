import { FC, useState } from 'react';

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
  const [isHover, setIsHover] = useState<number>(0);

  return (
    <>
      <div className={styles.wrapper}>
        {slidesContent.map((slide, index) => (
          <div
            onClick={() => {
              swiper.slideTo(index);
            }}
            onMouseEnter={() => {
              setIsHover(index);
            }}
            onMouseLeave={() => {
              setIsHover(0);
            }}
            key={index}
            className={activeSlide === index ? styles.item_active : styles.item}
            style={{
              top:
                activeSlide === index || isHover === index
                  ? points[index].y - radiusPointActive
                  : points[index].y - radiusPoint,
              left:
                activeSlide === index || isHover === index
                  ? points[index].x - radiusPointActive
                  : points[index].x - radiusPoint,
            }}
          >
            {activeSlide === index || isHover === index ? (
              <p>{index + 1}</p>
            ) : null}
          </div>
        ))}
      </div>
    </>
  );
};
