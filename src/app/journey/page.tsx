import Section from '@/components/section';
import { Timeline } from '@/components/ui/timeline';
import Image from 'next/image';

const journeys = [
  {
    title: '2025',
    content: (
      <div className='space-y-3 lg:space-y-6'>
        <div className='flex flex-col justify-between lg:flex-row lg:items-center'>
          <div className='text-base font-semibold md:text-xl'>
            <p className='text-fg'>PT Tiga Daya Digital Indonesia</p>
            <p className='from-primary to-accent bg-linear-to-r bg-clip-text text-transparent'>
              Fulltime Frontend Developer
            </p>
          </div>
          <p className='text-fg/80 text-sm md:text-base lg:max-w-36 lg:text-right'>
            January 2025 - Now
          </p>
        </div>
        <p className='text-fg text-xs font-normal md:text-base'>
          ✅ Developed an auction platform for JBA Indonesia (
          <a
            href='https://lelang.jba.co.id/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-300'
          >
            https://lelang.jba.co.id/
          </a>
          ) using React, Next.js, TypeScript, TailwindCSS, and Zustand <br />✅
          Developed an admin platform for managing the auction, featuring
          dashboards, complex data tables, and comprehensive data management
          capabilities (create, read, update, delete) <br />✅ Built responsive,
          modular UI components and optimized client-side performance <br />✅
          Integrated REST APIs, handled data fetching, caching, error states,
          and rendered structured data to the UI <br />✅ Delivered a scalable,
          maintainable frontend architecture aligned with client requirements
        </p>
        <div className='grid grid-cols-2 gap-4'>
          <Image
            src='https://res.cloudinary.com/dx34xih1p/image/upload/v1764379814/me_in_asl_fj6pef.jpg'
            alt='startup template'
            width={500}
            height={500}
            className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
          />
          <Image
            src='https://res.cloudinary.com/dx34xih1p/image/upload/v1764378195/Lelang-Elektronik-JBA-Indonesia_gqigjg.png'
            alt='startup template'
            width={500}
            height={500}
            className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
          />
        </div>
      </div>
    ),
  },
  {
    title: '2023 - 2024',
    content: (
      <div className='space-y-3 lg:space-y-6'>
        <div className='flex flex-col justify-between lg:flex-row lg:items-center'>
          <div className='text-base font-semibold md:text-xl'>
            <p className='text-fg'>PT Bukit Vista Nusantara</p>
            <p className='from-primary to-accent bg-linear-to-r bg-clip-text text-transparent'>
              Fulltime Frontend Developer
            </p>
          </div>
          <p className='text-fg/80 text-sm md:text-base lg:max-w-36 lg:text-right'>
            August 2023 - August 2024
          </p>
        </div>
        <p className='text-fg text-xs font-normal md:text-base'>
          ✅ Responsible for designing and developing UI on the web app using
          React, Redux, Context, Material UI, and TailwindCSS <br />✅
          Maintaining and enhancing performance for the web apps <br />✅
          Solving many errors and bugs that occur on the web apps <br />✅
          Implementing best practices for React development <br />✅ Doing code
          review and supervising interns <br />✅ Deploying features to
          production <br />✅ Developing custom functions inside WordPress
          website using PHP <br />✅ Working on a small project with the mobile
          application using Flutter
        </p>
        <div className='grid grid-cols-2 gap-4'>
          <Image
            src='https://res.cloudinary.com/dx34xih1p/image/upload/v1731677218/DSC08857_l4mkg9.jpg'
            alt='startup template'
            width={500}
            height={500}
            className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
          />
          <Image
            src='https://res.cloudinary.com/dx34xih1p/image/upload/v1731507569/tinker_lzjuyc.png'
            alt='startup template'
            width={500}
            height={500}
            className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
          />
          <Image
            src='https://res.cloudinary.com/dx34xih1p/image/upload/v1731678390/Screenshot_2024-08-14_160727_eoxzxa.png'
            alt='startup template'
            width={500}
            height={500}
            className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
          />
          <Image
            src='https://res.cloudinary.com/dx34xih1p/image/upload/v1731678675/Screenshot_2024-06-29_160042_dq7ivp.png'
            alt='startup template'
            width={500}
            height={500}
            className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
          />
          <Image
            src='https://res.cloudinary.com/dx34xih1p/image/upload/v1731678851/bvw-event-calendar_a3isgq.png'
            alt='startup template'
            width={500}
            height={500}
            className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
          />
        </div>
      </div>
    ),
  },
  {
    title: '2022 - 2023',
    content: (
      <div className='space-y-3 lg:space-y-6'>
        <div className='flex flex-col justify-between lg:flex-row lg:items-center'>
          <div className='text-base font-semibold md:text-xl'>
            <p className='text-fg'>PT Bukit Vista Nusantara</p>
            <p className='from-primary to-accent bg-linear-to-r bg-clip-text text-transparent'>
              Part-time Frontend Developer
            </p>
          </div>
          <p className='text-fg/80 text-sm md:text-base lg:max-w-36 lg:text-right'>
            July 2022 - August 2023
          </p>
        </div>
        <p className='text-fg text-xs font-normal md:text-base'>
          ✅ Responsible for creating UI on the web app using React, Redux,
          Material UI, and TailwindCSS <br />✅ Maintaining web apps <br />✅
          Solving many errors and bugs that occur on the web apps
        </p>
        <div className='grid grid-cols-2 gap-4'>
          <Image
            src='https://res.cloudinary.com/dx34xih1p/image/upload/v1731679863/bigrr-bookings_weujrk.png'
            alt='startup template'
            width={500}
            height={500}
            className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
          />
          <Image
            src='https://res.cloudinary.com/dx34xih1p/image/upload/v1731680448/guest-portal-es_ymmjyi.png'
            alt='startup template'
            width={500}
            height={500}
            className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
          />
        </div>
      </div>
    ),
  },
  {
    title: '2022',
    content: (
      <div className='space-y-3 lg:space-y-6'>
        <div className='flex flex-col justify-between lg:flex-row lg:items-center'>
          <div className='text-base font-semibold md:text-xl'>
            <p className='text-fg'>PT Bukit Vista Nusantara</p>
            <p className='from-primary to-accent bg-linear-to-r bg-clip-text text-transparent'>
              Frontend Developer Intern
            </p>
          </div>
          <p className='text-fg/80 text-sm md:text-base lg:max-w-36 lg:text-right'>
            February 2022 - June 2022
          </p>
        </div>
        <p className='text-fg text-xs font-normal md:text-base'>
          ✅ Responsible for creating UI on the web app using React, Redux,
          Material UI, and TailwindCSS <br />✅ Solving errors and bugs that
          occur on the web apps
        </p>
        <div className='grid grid-cols-2 gap-4'>
          <Image
            src='https://res.cloudinary.com/dx34xih1p/image/upload/v1731679594/ss_prop_list_new_2_bpnxlk.png'
            alt='BIGRR refactor property list page'
            width={500}
            height={500}
            className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
          />
          <Image
            src='https://res.cloudinary.com/dx34xih1p/image/upload/v1731679451/certif-intern-bv_mf1pyu.png'
            alt='BV intern certificate'
            width={500}
            height={500}
            className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
          />
        </div>
      </div>
    ),
  },
  {
    title: '2021 - 2022',
    content: (
      <div className='space-y-3 lg:space-y-6'>
        <div className='flex flex-col justify-between lg:flex-row lg:items-center'>
          <div className='text-base font-semibold md:text-xl'>
            <p className='text-fg'>English Learner ID</p>
            <p className='from-primary to-accent bg-linear-to-r bg-clip-text text-transparent'>
              Frontend Developer Intern
            </p>
          </div>
          <p className='text-fg/80 text-sm md:text-base lg:max-w-36 lg:text-right'>
            September 2021 - March 2022
          </p>
        </div>
        <p className='text-fg text-xs font-normal md:text-base'>
          ✅ Responsible for building the UI for the English Learner ID official
          website using HTML, CSS, JavaScript, and Bootstrap
        </p>
        <div className='grid grid-cols-2 gap-4'>
          <Image
            src='https://res.cloudinary.com/dx34xih1p/image/upload/v1731679165/Zulfa_Fatah_Akbar_Ahmad_-_EL_grufcb.png'
            alt='EL certificate'
            width={500}
            height={500}
            className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
          />
          <Image
            src='https://res.cloudinary.com/dx34xih1p/image/upload/v1731679343/english-learner_eo7gmz.png'
            alt='EL landing page'
            width={500}
            height={500}
            className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
          />
        </div>
      </div>
    ),
  },
];

export default function JourneyPage() {
  return (
    <div className='bg-dark relative min-h-screen w-full overflow-hidden'>
      <Section id='journey'>
        <Timeline data={journeys} />
      </Section>
    </div>
  );
}
