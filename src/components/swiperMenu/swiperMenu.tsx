import { FC, LegacyRef, useState } from 'react';

import { useSwiper } from 'swiper/react';

import { slidesContent } from '../../utils/data';

import styles from './swiperMenu.module.scss';
import { IPoints } from '../../types/types';

interface ISwiperMenuProps {
  activeSlide: number;
  menu: LegacyRef<HTMLDivElement>;
  radiusPoint: number;
  radiusPointActive: number;
  points: IPoints[];
  rotate: (slidesNumber: number, slideIndex: number) => void;
}

export const SwiperMenu: FC<ISwiperMenuProps> = ({
  activeSlide,
  menu,
  radiusPoint,
  radiusPointActive,
  points,
  rotate,
}) => {
  const swiper = useSwiper();
  const [isHover, setIsHover] = useState<number>();

  return (
    <>
      <div className={styles.wrapperwrapper} ref={menu}>
        <div className={styles.wrapper}>
          {slidesContent.map((slide, index) => (
            <div
              onClick={() => {
                if (activeSlide === index) {
                  return;
                }
                swiper.slideTo(index);
                rotate(slidesContent.length, swiper.activeIndex);
              }}
              onMouseEnter={() => {
                setIsHover(index);
              }}
              onMouseLeave={() => {
                setIsHover(-1);
              }}
              key={index}
              className={
                activeSlide === index ? styles.item_active : styles.item
              }
              style={{
                transform: `rotate(${(swiper.activeIndex * 360) / slidesContent.length}deg)`,
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
      </div>
    </>
  );
};
