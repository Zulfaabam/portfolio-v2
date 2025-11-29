import FeaturedProjects from '@/components/sections/featured-projects';
import AboutSection from '@/components/sections/about-section';
import HeroSection from '@/components/sections/hero-section';
import TellMeSection from '@/components/sections/tell-me-section';

export default function Homepage() {
  return (
    <div className='relative'>
      <HeroSection />
      <div className='from-dark via-dark w-full bg-linear-to-b to-black'>
        <AboutSection />
        <FeaturedProjects />
      </div>
      <div className='bg-earth-from-space w-full bg-black/60 bg-cover bg-no-repeat bg-blend-hard-light'>
        <TellMeSection />
      </div>
    </div>
  );
}
