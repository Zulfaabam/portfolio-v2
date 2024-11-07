import About from '@/components/about';
import FeaturedProjects from '@/components/featured-projects';
import Hero from '@/components/hero';

export default function Homepage() {
  return (
    <>
      <Hero />
      <div className='w-full bg-gradient-to-b from-dark via-dark to-black'>
        <About />
        <FeaturedProjects />
      </div>
    </>
  );
}
