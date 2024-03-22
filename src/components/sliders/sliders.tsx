import { FC, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import 'swiper/scss/pagination';
import { Navigation, Pagination, History, Controller } from 'swiper/modules';

import { slidesContent } from '../../utils/data';

import { NavButtons } from '../buttons/navButtons/buttons';

import { SwiperMenu } from '../swiperMenu/swiperMenu';

import { Slide } from './slider/slide';

import styles from './sliders.module.scss';

const Sliders: FC = () => {
  const [isLastSlide, setIsLastSlide] = useState<string>('begin');

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
          <div className={`${styles.swiperMenu}`}>
            <SwiperMenu totalSlides={slidesContent.length} />
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
