import { SVGShop, SVGClose } from '../icons/SVG';

import classes from './ButtonOps.module.css';

export const ButtonShop = props => {
  return (
    <button
      className={`${classes.btnOps} ${props.class}`}
      disabled={props.disabled}
      onClick={props.onShowModal}
    >
      <SVGShop class={classes.svg} />
    </button>
  );
};

export const ButtonClose = props => {
  return (
    <button
      className={`${classes.btnOps} ${props.class}`}
      onClick={props.onClick}
    >
      <SVGClose class={classes.svg} />
    </button>
  );
};
