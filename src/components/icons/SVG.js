import svg from './../../assets/svg/sprite.svg';

import classes from './SVG.module.css';

export const SVGStar = props => {
  return (
    <svg className={`${props.class} ${classes.iconStars}`}>
      <use href={`${svg}#icon-star`}></use>
    </svg>
  );
};

export const SVGShop = props => {
  return (
    <svg className={`${props.class} ${classes.iconShop}`}>
      <use href={`${svg}#icon-motorcycle`}></use>
    </svg>
  );
};

export const SVGClose = props => {
  return (
    <svg className={`${props.class} ${classes.iconClose}`}>
      <use href={`${svg}#icon-cross`}></use>
    </svg>
  );
};

export const SVGForm = props => {
  return (
    <svg className={`${props.class} ${classes.iconForm}`}>
      <use href={`${svg}#icon-clipboard-edit`}></use>
    </svg>
  );
};
