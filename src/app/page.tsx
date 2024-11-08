import About from '@/components/about';
import FeaturedProjects from '@/components/featured-projects';
import Hero from '@/components/hero';
import TellMeSection from '@/components/tell-me';

export default function Homepage() {
  return (
    <>
      <Hero />
      <div className='w-full bg-gradient-to-b from-dark via-dark to-black'>
        <About />
        <FeaturedProjects />
      </div>
      <div className='bg-earth-from-space w-full bg-cover bg-no-repeat'>
        <TellMeSection />
      </div>
    </>
  );
}
