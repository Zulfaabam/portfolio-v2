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
      <div className='w-full bg-gradient-to-b from-dark via-dark to-black'>
        {/* <AboutSection /> */}
        {/* <FeaturedProjects /> */}
      </div>
      <div className='w-full bg-black/60 bg-earth-from-space bg-cover bg-no-repeat bg-blend-hard-light'>
        {/* <TellMeSection /> */}
      </div>
    </div>
  );
}
