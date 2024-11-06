import Hero from '@/components/Hero';
import { fontPacifico } from '@/lib/fonts';

export default function Homepage() {
  return (
    <div>
      <Hero />
      <h1 className={`${fontPacifico}`}>test tailwind</h1>
    </div>
  );
}
