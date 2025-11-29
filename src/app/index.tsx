import AboutSection from '@/components/sections/about-section';
import FeaturedProjects from '@/components/sections/featured-projects';
import HeroSection from '@/components/sections/hero-section';
import TellMeSection from '@/components/sections/tell-me-section';
import { getSupabaseServerClient } from '@/lib/supabase/server';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  return (
    <div className='relative'>
      <HeroSection />
      <div className='from-dark via-dark w-full bg-linear-to-b to-black'>
        <AboutSection />
        {/* <FeaturedProjects /> */}
      </div>
      <div className='bg-earth-from-space w-full bg-black/60 bg-cover bg-no-repeat bg-blend-hard-light'>
        {/* <TellMeSection /> */}
      </div>
    </div>
  );
}
