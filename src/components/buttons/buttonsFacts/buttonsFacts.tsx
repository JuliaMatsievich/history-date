import { FC } from 'react';
import { useSwiper } from 'swiper/react';

import styles from './buttonsFacts.module.scss';

interface INavButtonsProps {
  isLastSlide: string;
  setIsLastSlide: React.Dispatch<React.SetStateAction<string>>;
}

export const ButtonsFacts: FC<INavButtonsProps> = ({
  isLastSlide,
  setIsLastSlide,
}) => {
  const swiper = useSwiper();
  console.log('swiper.isBeginning', swiper.isBeginning);
  console.log(' swiper.isEnd ', swiper.isEnd);
  console.log('swiper', swiper);

  // const [isLastSlide, setisLastSlide] = useState<boolean>(false);

  return (
    <>
      <div className={styles.wrapper}>
        <button
          type="button"
          onClick={() => {
            setIsLastSlide('prev');
            swiper.slidePrev();
          }}
          aria-label="prev"
          className={
            isLastSlide === 'begin'
              ? styles.prevButton_disabled
              : styles.prevButton
          }
        >
          <svg
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 11L2 6L7 1" stroke="#3877EE" strokeWidth="2" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => {
            setIsLastSlide('next');
            swiper.slideNext();
          }}
          aria-label="next"
          className={
            isLastSlide === 'end'
              ? styles.nextButton_disabled
              : styles.nextButton
          }
        >
          <svg
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 1L6 6L1 11" stroke="#3877EE" strokeWidth="2" />
          </svg>
        </button>
      </div>
    </>
  );
};
