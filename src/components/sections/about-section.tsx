import Section from '../section';
import { techStack as techStackBackup } from '@/lib/consts';
import { getSupabaseServerClient } from '@/lib/supabase/server';
import TechStackBox from '../about/tech-stack-box';
import AboutMeBox from '../about/about-me-box';
import MyJourneyRing from '../about/my-journey-ring';
import LongDescBox from '../about/long-desc-box';
import LearningBox from '../about/learning-box';

export default function AboutSection() {
  const supabase = getSupabaseServerClient();

  // const { data, error: techStackError } = await supabase
  //   .from('tech_stack')
  //   .select('*');

  // const techStack = techStackError ? techStackBackup : data;

  return (
    <Section
      id='about'
      className='text-fg grid w-full grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-12 xl:gap-6'
    >
      {/* <TechStackBox techStack={techStack} /> */}
      <AboutMeBox />
      <MyJourneyRing />
      <LongDescBox />
      <LearningBox />
    </Section>
  );
}
