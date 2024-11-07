import About from '@/components/about';
import Hero from '@/components/hero';

export default function Homepage() {
  return (
    <>
      <Hero />
      <div className='w-full bg-gradient-to-b from-dark via-dark to-black'>
        <About />
      </div>
    </>
  );
}
