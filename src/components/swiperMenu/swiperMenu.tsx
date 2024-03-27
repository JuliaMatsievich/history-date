import { FC, useRef, useState } from 'react';

import { useSwiper } from 'swiper/react';

// import * as PIXI from 'pixi.js';

import { getCoordPoints } from '../../utils/helpFunc/getCoordPointsFunc';

import { IPoints } from '../../types/types';

import { slidesContent } from '../../utils/data';

import styles from './swiperMenu.module.scss';

// import { PixiPlugin } from 'gsap/PixiPlugin';
import gsap from 'gsap';
// import { useGSAP } from '@gsap/react';

// gsap.registerPlugin(PixiPlugin);
// PixiPlugin.registerPIXI(PIXI);

interface ISwiperMenuProps {
  activeSlide: number;
}

export const SwiperMenu: FC<ISwiperMenuProps> = ({ activeSlide }) => {
  const radius = 265;
  const radiusPoint = 3;
  const radiusPointActive = 28;
  const swiper = useSwiper();
  const points: IPoints[] = getCoordPoints(radius, slidesContent.length);
  const [isHover, setIsHover] = useState<number>();
  // const circle = useRef<HTMLDivElement>(null);
  const menu = useRef<HTMLDivElement>(null);
  // const tl = useRef<GSAPTimeline>();
  const item = useRef<HTMLDivElement>(null);
  // const [prevSlide, setPrevSlide] = useState<number>(activeSlide);
  // const [state, setState] = useState<number>(activeSlide);

  // useGSAP(
  //   () => {
  //     gsap.to(menu.current, { rotaiton: 360 });
  //   },
  //   { dependencies: [activeSlide], revertOnUpdate: true, scope: menu }
  // );

  // const onEnter = () => {
  // tl.current = gsap
  //   .timeline()
  //   .to(menu.current, { rotation: 360 })
  //   .to(item.current, {
  //     duration: 3,
  //     ease: 'power2.inOut',
  //     rotation: 360,
  //     repeat: -1,
  //     transformOrigin: 'center center',
  //   });
  // gsap.to(item.current, {
  //   duration: 3,
  //   ease: 'power2.inOut',
  //   rotation: 360,
  //   repeat: -1,
  //   transformOrigin: 'center center',
  // });
  // gsap.to(menu.current, { rotation: 360 });
  // };

  const rotate = (slideNumber: number, slidesNumber: number) => {
    const angle = slideNumber * ((2 * Math.PI) / slidesNumber);
    console.log('angle', angle);
    gsap.fromTo(menu.current, { rotation: -45 }, { rotation: angle + 60 });
  };

  return (
    <>
      <div className={styles.wrapperwrapper} ref={menu}>
        <div className={styles.wrapper}>
          {slidesContent.map((slide, index) => (
            <div
              ref={item}
              onClick={() => {
                swiper.slideTo(index);
                rotate(index, slidesContent.length);
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
