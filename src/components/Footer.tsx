import { ImageProps } from '../dto/commonDto';
import { socmedLists } from './Lists';

export interface SocmedProps extends ImageProps {
  link: string;
}

export default function Footer() {
  return (
    <div className='footer fixed bottom-0 left-0 right-0 w-full' id='footer'>
      <div className='footer-upper bg-dark-gray text-center p-4 sm:flex sm:justify-evenly sm:items-center '>
        <p className='text-white text-sm sm:text-base'>
          Connect with me on social media
        </p>
        <div className='socmed-wrapper flex justify-center gap-4'>
          {socmedLists.map((socmedList, index) => {
            return (
              <Socmed
                key={index}
                title={socmedList.title}
                src={socmedList.src}
                alt={socmedList.alt}
                link={socmedList.link}
              />
            );
          })}
        </div>
      </div>
      <div className='footer-bottom bg-darker text-center p-2 sm:p-4'>
        <p className='text-[#6c757d] text-sm sm:text-base'>
          Latest Update June 2022 | Created by{' '}
          <a
            href='#header'
            className='text-white transition-all hover:text-blue-light'
          >
            Abam
          </a>
        </p>
      </div>
    </div>
  );
}

const Socmed = ({ link, src, alt, title }: SocmedProps) => {
  return (
    <a href={link} target='_blank' rel='noreferrer'>
      <img
        src={src}
        alt={alt}
        title={title}
        className='w-6 transition-all mt-2 sm:mt-0 hover:scale-125'
      />
    </a>
  );
};
