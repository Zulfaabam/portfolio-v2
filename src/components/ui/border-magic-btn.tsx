import React, { ButtonHTMLAttributes } from 'react';

export interface BorderMagicBtnProps<T> extends ButtonHTMLAttributes<T> {
  text: string | React.ReactNode;
}

export default function BorderMagicBtn({
  onClick,
  text,
}: BorderMagicBtnProps<HTMLButtonElement>) {
  return (
    <button
      className='group relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none md:h-12'
      onClick={onClick}
    >
      <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00F9E9_0%,#76C1FF_50%,#00F9E9_100%)] transition-all group-hover:-inset-5 group-hover:blur-lg' />
      <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-dark px-6 py-1 text-lg font-light text-fg backdrop-blur-3xl md:px-10 md:text-2xl'>
        {text}
      </span>
    </button>
  );
}
