import { FC, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import 'swiper/scss/pagination';
import { Navigation, Pagination } from 'swiper/modules';

import { slidesContent } from '../../utils/data';

import { Slide } from '../slider/slide';
import { NavButtons } from '../buttons/buttons';

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
          onReachBeginning={() => setIsLastSlide('begin')}
          onReachEnd={() => setIsLastSlide('end')}
          pagination={{
            el: `.swiper_pagination`,
            clickable: true,
            type: 'fraction',
            formatFractionCurrent: (number) => `0${number}`,
            formatFractionTotal: (number) => `0${number}`,
          }}
          modules={[Pagination, Navigation]}
        >
          {slidesContent.map((slide) => {
            return (
              <>
                <SwiperSlide key={slide.id}>
                  <Slide year={slide.year} />
                </SwiperSlide>
              </>
            );
          })}
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
