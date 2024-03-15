import { FC } from 'react';

import styles from './layout.module.scss';

export const Layout: FC = () => {
  return (
    <>
      <div className={styles.container}>
        <svg
          className={styles.background}
          width="1442"
          height="1080"
          viewBox="0 0 1442 1080"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path opacity="0.1" d="M1 0V1080" stroke="#42567A" />
          <path opacity="0.1" d="M721 0V1080" stroke="#42567A" />
          <path opacity="0.1" d="M1441 0V1080" stroke="#42567A" />
          <path opacity="0.1" d="M1 480H1441" stroke="#42567A" />
        </svg>
        <div className={styles.titleСontainer}>
          <svg
            className={styles.titleGradient}
            width="6"
            height="120"
            viewBox="0 0 6 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 0L2.99999 120"
              stroke="url(#paint0_linear_1_56)"
              strokeWidth="5"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_56"
                x1="3.5"
                y1="-6"
                x2="3.49999"
                y2="102"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3877EE" />
                <stop offset="1" stopColor="#EF5DA8" />
              </linearGradient>
            </defs>
          </svg>
          <div className={styles.titleContent}>Исторические даты</div>
        </div>
      </div>
    </>
  );
};
