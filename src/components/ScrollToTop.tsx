import { useEffect } from 'react';

export default function ScrollToTop() {
  // const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}
