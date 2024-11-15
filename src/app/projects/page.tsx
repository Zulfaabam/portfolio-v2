import Section from '@/components/section';

export default function ProjectsPage() {
  return (
    <div className='relative min-h-screen w-full bg-dark'>
      <Section id='projects'>
        <div className='mx-auto py-20'>
          <h2 className='mb-4 max-w-4xl text-lg text-fg md:text-4xl'>
            My Projects
          </h2>
          <p className='max-w-sm text-sm text-fg md:text-base'>
            Projects I&apos;ve been working as a Frontend Developer for 2+
            years. Here&apos;s my timeline.
          </p>
        </div>
      </Section>
    </div>
  );
}
