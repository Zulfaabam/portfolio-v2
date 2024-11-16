'use client';
import ErrorContent from '@/components/error-content';
import Section from '@/components/section';

// Error boundaries must be Client Components

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    // global-error must include html and body tags
    <html>
      <body>
        <div className='relative flex min-h-screen w-full items-center bg-dark'>
          <Section
            id='error-projects'
            className='flex flex-col items-center justify-center gap-2'
          >
            <ErrorContent reset={() => reset()} />
          </Section>
        </div>
      </body>
    </html>
  );
}
