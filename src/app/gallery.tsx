import ErrorContent from '@/components/error-content';
import Section from '@/components/section';
import { IconBarrierBlock } from '@tabler/icons-react';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/gallery')({
  errorComponent: ({ reset }) => (
    <div className='relative flex min-h-screen w-full items-center bg-dark'>
      <Section
        id='error-gallery'
        className='flex flex-col items-center justify-center gap-2'
      >
        <ErrorContent reset={() => reset()} />
      </Section>
    </div>
  ),
  component: Gallery,
});

function Gallery() {
  return (
    <div className='relative flex min-h-screen w-full items-center justify-center bg-dark'>
      <Section id='gallery'>
        <IconBarrierBlock className='mx-auto block h-10 w-10 text-yellow-300' />
        <h6 className='text-fg'>Sorry, this page is under construction</h6>
      </Section>
    </div>
  );
}
