import Portfolio from './Portfolio';
import About from './about';
import TechStack from './TechStack';

export default function Main() {
  return (
    <div className='main'>
      <About />
      <TechStack />
      <Portfolio />
    </div>
  );
}
