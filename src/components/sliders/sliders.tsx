import { FC, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import 'swiper/css';

import 'swiper/scss/pagination';
import { Navigation, Pagination, History, Controller } from 'swiper/modules';

import { slidesContent } from '../../utils/data';

import { NavButtons } from '../buttons/navButtons/buttons';

import { SwiperMenu } from '../swiperMenu/swiperMenu';

import { Slide } from './slider/slide';

import styles from './sliders.module.scss';

gsap.registerPlugin(useGSAP);

const Sliders: FC = () => {
  const [isLastSlide, setIsLastSlide] = useState<string>('begin');
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const container = useRef(null);

  // useGSAP(
  //   () => {
  //     // gsap code here...
  //     gsap.to(container.current, { rotation: 360 }); // <-- automatically reverted
  //   },
  //   { scope: container }
  // ); // <-- scope for selector text (optional)

  return (
    <>
      <div className={styles.wrapper}>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          allowTouchMove={false}
          onReachBeginning={() => setIsLastSlide('begin')}
          onReachEnd={() => setIsLastSlide('end')}
          onSlideChange={(swiper: SwiperType) =>
            setActiveSlide(swiper.activeIndex)
          }
          history={{
            key: 'slide',
          }}
          pagination={{
            el: `.swiper_pagination`,
            clickable: true,
            type: 'fraction',
            formatFractionCurrent: (number: number) => `0${number}`,
            formatFractionTotal: (number: number) => `0${number}`,
          }}
          modules={[Pagination, Navigation, History, Controller]}
        >
          <div className={`${styles.swiperMenu}`} ref={container}>
            <SwiperMenu activeSlide={activeSlide} />
          </div>
          {slidesContent.map((slide, index) => (
            <SwiperSlide
              key={slide.id}
              data-history={`${slide.id}`}
              virtualIndex={index}
            >
              <Slide facts={slide.facts} />
            </SwiperSlide>
          ))}
          <div className={styles.navButtons_wrapper}>
            <div className={styles.navButtons}>
              <div className={`${styles.nav_pagination} swiper_pagination`} />
              <NavButtons
                isLastSlide={isLastSlide}
                setIsLastSlide={setIsLastSlide}
              />
            </div>
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default Sliders;
