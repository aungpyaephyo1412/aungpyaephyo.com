'use client';
import type { SVGProps } from 'react';
const shadcnui = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256'>
    <path fill='none' d='M0 0h256v256H0z' />
    <path
      fill='none'
      className='stroke-1 stroke-black dark:stroke-white'
      d='M208 128l-80 80M192 40L40 192'
    />
  </svg>
);
export default shadcnui;
