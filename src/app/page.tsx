import FeaturedProjects from '@/components/sections/featured-projects';
import AboutSection from '@/components/sections/about-section';
import HeroSection from '@/components/sections/hero-section';
import TellMeSection from '@/components/sections/tell-me-section';

export default function Homepage() {
  return (
    <div className='relative'>
      <HeroSection />
      <div className='w-full bg-gradient-to-b from-dark via-dark to-black'>
        <AboutSection />
        <FeaturedProjects />
      </div>
      <div className='w-full bg-earth-from-space bg-cover bg-no-repeat'>
        <TellMeSection />
      </div>
    </div>
  );
}
