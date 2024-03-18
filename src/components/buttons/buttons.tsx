import { FC } from 'react';

import { useSwiper } from 'swiper/react';

import styles from './buttons.module.scss';

export const NavButtons: FC = () => {
  const swiper = useSwiper();
  return (
    <>
      <div className={styles.nav_navigation}>
        <button
          type="button"
          onClick={() => swiper.slidePrev()}
          className={styles.swiperButtonPrev}
          aria-label="prev"
        >
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="25"
              cy="25"
              r="24.5"
              transform="matrix(-1 0 0 1 50 0)"
              stroke="#42567A"
              strokeOpacity="0.5"
            />
            <path
              d="M27.4999 18.75L21.2499 25L27.4999 31.25"
              stroke="#42567A"
              strokeWidth="2"
            />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => swiper.slideNext()}
          className={styles.swiperButtonNext}
          aria-label="next"
        >
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.5">
              <circle
                cx="25"
                cy="25"
                r="24.5"
                stroke="#42567A"
                strokeOpacity="0.5"
              />
              <path
                d="M22.5001 18.75L28.7501 25L22.5001 31.25"
                stroke="#42567A"
                strokeWidth="2"
              />
            </g>
          </svg>
        </button>
      </div>
    </>
  );
};
