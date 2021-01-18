import React from 'react';

const HeroWaves = () => {
  return (
    <svg
      className='w-full absolute  bottom-0 '
      viewBox='0 0 1440 262'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M0 158.284L80 153.989C160 149.371 320 141.268 480 149.614C640 158.284 800 184.213 960 192.883C1120 201.229 1280 193.126 1360 188.507L1440 184.213V262H1360C1280 262 1120 262 960 262C800 262 640 262 480 262C320 262 160 262 80 262H0V158.284Z'
        fill='#2670d0'
      />
      <path
        d='M0 163.75L80 169.174C160 175.008 320 185.242 480 169.174C640 152.492 800 109.508 960 76.4508C1120 44.0078 1280 21.4922 1360 10.9508L1440 0V262H1360C1280 262 1120 262 960 262C800 262 640 262 480 262C320 262 160 262 80 262H0V163.75Z'
        fill='#2670d0'
        fillOpacity='0.5'
      />
      <path
        d='M0 38L80 43.3C160 49 320 59 480 86C640 113 800 155 960 155.3C1120 155 1280 113 1360 91.3L1440 70V262H1360C1280 262 1120 262 960 262C800 262 640 262 480 262C320 262 160 262 80 262H0V38Z'
        fill='#2670d0'
        fillOpacity='0.3'
      />
    </svg>
  );
};

export default HeroWaves;