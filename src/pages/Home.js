import React from 'react';

import classes from './Home.module.css';

import SlideHero from '../components/carousel/SlideHero';

const Home = (props, ref) => {
  const showcaseRef = ref;

  return (
    <div className={classes.container} ref={showcaseRef}>
      <SlideHero />
    </div>
  );
};
export default React.forwardRef(Home);
