import About from '@/components/about';
import FeaturedProjects from '@/components/featured-projects';
import FloatingSocmed from '@/components/floating-socmed';
import Hero from '@/components/hero';
import Navbar from '@/components/navbar';
import TellMeSection from '@/components/tell-me';

export default function Homepage() {
  return (
    <div className='relative'>
      <Navbar />
      <FloatingSocmed />
      <Hero />
      <div className='w-full bg-gradient-to-b from-dark via-dark to-black'>
        <About />
        <FeaturedProjects />
      </div>
      <div className='w-full bg-earth-from-space bg-cover bg-no-repeat'>
        <TellMeSection />
      </div>
    </div>
  );
}
