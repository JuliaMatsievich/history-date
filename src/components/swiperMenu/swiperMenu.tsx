import { FC, useEffect, useState } from 'react';

import { useSwiper, useSwiperSlide } from 'swiper/react';

import { getCoordPoints } from '../../utils/helpFunc/getCoordPointsFunc';

import { IPoints } from '../../types/types';

import { slidesContent } from '../../utils/data';

import styles from './swiperMenu.module.scss';

interface ISwiperMenuProps {
  totalSlides: number;
}

export const SwiperMenu: FC<ISwiperMenuProps> = ({ totalSlides }) => {
  const radius = 265;
  const radiusPoint = 3;
  const radiusPointActive = 28;
  const swiper = useSwiper();
  const swiperSlide = useSwiperSlide();
  const points: IPoints[] = getCoordPoints(radius, slidesContent.length);

  // const [points, setPoints] = useState<IPoints[]>(
  //   getCoordPoints(radius, slidesContent.length, radiusPoint)
  // );
  const [activeSlide, setActiveSlide] = useState<number>(0);

  useEffect(() => {
    // setPoints(getCoordPoints(radius, slidesContent.length, radiusPoint));
    console.log('points', points);
    console.log('totalSlides', totalSlides);
  }, []);

  useEffect(() => {
    console.log('swiper', swiper);
    console.log('swiperSlide', swiperSlide);
  }, [swiperSlide, swiper]);

  return (
    <>
      <div className={styles.wrapper}>
        {slidesContent.map((slide, index) => (
          <div
            onClick={() => {
              swiper.slideTo(index);
              setActiveSlide(index);
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
        {/* 
        {points.map((point, index) => (
          <div
            onClick={(e) => console.log(e.target)}
            key={index}
            className={styles.item}
            style={{
              top: point.y,
              left: point.x,
            }}
          />
        ))} */}
        {/* <div className={styles.item_1} data-index="1">
          .
        </div>
        <div className={styles.item} data-index="2">
          .
        </div>
        <div className={styles.item_active} data-index="3">
          3
        </div>
        <div className={styles.item} data-index="4">
          .
        </div> */}
      </div>
    </>
  );
};
