import Section from '../section';
import { techStack as techStackBackup } from '@/lib/consts';
import { createClient } from '@/lib/supabase/server';
import TechStackBox from '../about/tech-stack-box';
import AboutMeBox from '../about/about-me-box';
import MyJourneyRing from '../about/my-journey-ring';
import LongDescBox from '../about/long-desc-box';
import LearningBox from '../about/learning-box';

export default async function AboutSection() {
  const supabase = await createClient();

  const { data, error: techStackError } = await supabase
    .from('tech_stack')
    .select('*');

  const techStack = techStackError ? techStackBackup : data;

  return (
    <Section
      id='about'
      className='grid w-full grid-cols-1 gap-2 text-fg sm:grid-cols-2 lg:grid-cols-12 xl:gap-6'
    >
      <TechStackBox techStack={techStack} />
      <AboutMeBox />
      <MyJourneyRing />
      <LongDescBox />
      <LearningBox />
    </Section>
  );
}
