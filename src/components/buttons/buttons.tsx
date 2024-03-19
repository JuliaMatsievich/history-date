import { FC } from 'react';

import { useSwiper } from 'swiper/react';

import styles from './buttons.module.scss';

interface INavButtonsProps {
  isLastSlide: string;
  setIsLastSlide: React.Dispatch<React.SetStateAction<string>>;
}

export const NavButtons: FC<INavButtonsProps> = ({
  isLastSlide,
  setIsLastSlide,
}) => {
  const swiper = useSwiper();
  console.log('isLastSlide', isLastSlide);
  return (
    <>
      <div className={styles.nav_navigation}>
        <button
          type="button"
          onClick={() => {
            setIsLastSlide('prev');
            swiper.slidePrev();
          }}
          className={
            isLastSlide === 'begin'
              ? styles.swiperButtonPrev_disabled
              : styles.swiperButtonPrev
          }
          aria-label="prev"
          disabled={isLastSlide === 'begin'}
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
          onClick={() => {
            setIsLastSlide('next');
            swiper.slideNext();
          }}
          className={
            isLastSlide === 'end'
              ? styles.swiperButtonNext_disabled
              : styles.swiperButtonNext
          }
          aria-label="next"
          disabled={isLastSlide === 'end'}
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
              stroke="#42567A"
              strokeOpacity="0.5"
            />
            <path
              d="M22.5001 18.75L28.7501 25L22.5001 31.25"
              stroke="#42567A"
              strokeWidth="2"
            />
          </svg>
        </button>
      </div>
    </>
  );
};
