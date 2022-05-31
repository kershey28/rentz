import Navigation from './Navigation';

import { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Essentials = props => {
  ///////////////////////////////////////
  // Sticky Navigation
  const showcaseRef = props.showcaseRef;
  const navRef = useRef(null);

  const [isNavAppeared, setNavAppeared] = useState(true);
  const classRef = isNavAppeared ? 'navSticky' : 'navAbsolute';
  const location = useLocation();

  useEffect(() => {
    const navHeight = navRef.current.getBoundingClientRect().height;

    // functionality
    const stickyNav = entries => {
      const [entry] = entries;

      if (location.pathname === '/') return;

      if (!entry.isIntersecting) {
        setNavAppeared(true);
      } else setNavAppeared(false);
    };

    //observer;
    const navigationObserver = new IntersectionObserver(stickyNav, {
      root: null,
      threshold: 0,
      rootMargin: `-${navHeight}px`,
    });

    navigationObserver.observe(showcaseRef.current);
  }, [classRef, location, showcaseRef]);

  ///////////////////////////////////////
  // Arguments
  const link1 = 'Home';
  const link2 = 'Ducati';
  const link3 = 'Suzuki';
  const link4 = 'BMW';
  const link5 = 'Kawasaki';
  const link6 = 'H - D';
  const link7 = 'Triumph';

  return (
    <>
      <Navigation
        link1={link1}
        link2={link2}
        link3={link3}
        link4={link4}
        link5={link5}
        link6={link6}
        link7={link7}
        ref={navRef}
        class={classRef}
      />
    </>
  );
};

export default Essentials;
