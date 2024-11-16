import Section from '@/components/section';
import { IconBarrierBlock } from '@tabler/icons-react';

export default function GalleryPage() {
  return (
    <div className='relative flex min-h-screen w-full items-center justify-center bg-dark'>
      <Section id='gallery'>
        <IconBarrierBlock className='mx-auto block h-10 w-10 text-yellow-300' />
        <h6 className='text-fg'>Sorry, this page is under construction</h6>
      </Section>
    </div>
  );
}
