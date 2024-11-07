'use client';
import { ButtonHTMLAttributes } from 'react';

export interface BorderMagicBtnProps<T> extends ButtonHTMLAttributes<T> {
  text: string;
}

export default function BorderMagicBtn({
  onClick,
  text,
}: BorderMagicBtnProps<HTMLButtonElement>) {
  return (
    <button
      className='relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none'
      onClick={onClick}
    >
      <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00F9E9_0%,#76C1FF_50%,#00F9E9_100%)]' />
      <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-dark px-10 py-1 text-[1.5rem] font-light text-fg backdrop-blur-3xl transition-all duration-300 hover:bg-neutral-800'>
        {text}
      </span>
    </button>
  );
}
