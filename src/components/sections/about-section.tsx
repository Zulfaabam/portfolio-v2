import Section from '../section';
import { techStack as techStackBackup } from '@/lib/consts';
import { getSupabaseServerClient } from '@/lib/supabase/server';
import TechStackBox, { TechStack } from '../about/tech-stack-box';
import AboutMeBox from '../about/about-me-box';
import MyJourneyRing from '../about/my-journey-ring';
import LongDescBox from '../about/long-desc-box';
import LearningBox from '../about/learning-box';
import { createServerFn } from '@tanstack/react-start';
import { useQuery } from '@tanstack/react-query';

export const getTechStack = createServerFn({ method: 'GET' }).handler(
  async (): Promise<{
    data: TechStack[];
    error: { message: string } | null;
  }> => {
    const supabase = getSupabaseServerClient();

    const { data, error } = await supabase.from('tech_stack').select('*');

    if (error) throw new Error(error.message);
    return { data, error };
  },
);

export default function AboutSection() {
  const { data, error, isLoading } = useQuery({
    queryKey: ['techStack'],
    queryFn: () => getTechStack(),
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading tech stack</p>;

  const techStack = data?.data ?? techStackBackup;

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
