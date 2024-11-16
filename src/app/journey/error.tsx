'use client'; // Error boundaries must be Client Components

import ErrorContent from '@/components/error-content';
import Section from '@/components/section';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className='relative flex min-h-screen w-full items-center bg-dark'>
      <Section
        id='error-journey'
        className='flex flex-col items-center justify-center gap-2'
      >
        <ErrorContent reset={() => reset()} />
      </Section>
    </div>
  );
}
