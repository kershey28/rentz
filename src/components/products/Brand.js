import classes from './Brand.module.css';

import Particle from './../floaters/Particle';
import HorizontalLine from '../floaters/HorizontalLine';

const Brand = props => {
  return (
    <div className={`${classes.container} ${props.class}`}>
      <img
        src={props.brandImg}
        alt={`${props.brand}`}
        className={classes.img}
      />
      <div className={classes.content}>
        <h2 className={`${classes.title} heading-2`}>{props.heading}</h2>
        <HorizontalLine />
        <p className={classes.description}>{props.description}</p>
      </div>
      <Particle />
    </div>
  );
};

export default Brand;
