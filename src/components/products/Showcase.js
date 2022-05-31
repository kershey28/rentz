import classes from './Showcase.module.css';
import React from 'react';
import NeonLine from '../floaters/NeonLine';

const Showcase = (props, ref) => {
  const showcaseRef = ref;

  return (
    <div className={`${classes.container} ${props.class}`} ref={showcaseRef}>
      <h1 className={`${classes.title} heading-display`}>{props.title}</h1>
      <div className={classes.imgBox}>
        <img src={props.showcaseImg} alt="showcase" className={classes.img} />
        <NeonLine />
      </div>
    </div>
  );
};

export default React.forwardRef(Showcase);
