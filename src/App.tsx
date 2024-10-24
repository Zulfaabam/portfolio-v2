import Homepage from './pages/Homepage';
import FullProfile from './pages/FullProfile';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  const location = useLocation();

  return (
    <div className='App'>
      <AnimatePresence mode='wait' initial={true}>
        <ScrollToTop />
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Homepage />} />
          <Route path='/full-profile' element={<FullProfile />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}
