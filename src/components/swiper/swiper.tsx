import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import 'swiper/scss/pagination';
import { Navigation, Pagination } from 'swiper/modules';

import { slidesContent } from '../../utils/data';

import { Slide } from '../slider/slide';
import { NavButtons } from '../buttons/buttons';

import styles from './swiper.module.scss';

const Sliders: FC = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          pagination={{
            clickable: true,
            type: 'bullets',
          }}
          modules={[Navigation, Pagination]}
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
              <div className={styles.nav_pagination}>01/04</div>
              <NavButtons />
            </div>
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default Sliders;
