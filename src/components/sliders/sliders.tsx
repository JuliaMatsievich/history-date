import { FC, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Swiper as SwiperType } from 'swiper';

import 'swiper/css';

import 'swiper/scss/pagination';
import { Navigation, Pagination, History, Controller } from 'swiper/modules';

import { slidesContent } from '../../utils/data';

import { NavButtons } from '../buttons/navButtons/buttons';

import { Slide } from './slider/slide';

import styles from './sliders.module.scss';

const Sliders: FC = () => {
  const [isLastSlide, setIsLastSlide] = useState<string>('begin');

  // const pagination = {
  //   // clickable: true,
  //   // renderBullet(index: number, className: string) {
  //   //   return `<span class="${className}">0${index + 1}</span>`;
  //   // },
  //   renderFraction(currentClass: string, totalClass: string) {
  //     return (
  //       `<span class="${currentClass}"></span>` +
  //       ` of ` +
  //       `<span class="${totalClass}"></span>`
  //     );
  //   },
  //   type: 'fraction',
  // };

  return (
    <>
      <div className={styles.wrapper}>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          allowTouchMove={false}
          onReachBeginning={() => setIsLastSlide('begin')}
          onReachEnd={() => setIsLastSlide('end')}
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
