import React from 'react';

import classes from './Home.module.css';

import SlideHero from '../components/carousel/SlideHero';

const Home = (props, ref) => {
  return (
    <div className={classes.container} ref={ref}>
      <SlideHero />
    </div>
  );
};
export default React.forwardRef(Home);
