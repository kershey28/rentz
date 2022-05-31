import { SVGStar } from '../icons/SVG';
import { ButtonShop } from '../buttons/ButtonOps';

import classes from './Product.module.css';
import { makeID, formatCurrency } from '../../helpers/helpers';

const Product = props => {
  const noOfStars = props.rate;
  const rateStar = [...Array(noOfStars)].map(el => <SVGStar key={makeID()} />);
  const formattedPrice = formatCurrency(props.price, 'en-US', 'PHP');

  return (
    <li className={`${classes.container} ${classes.class}`}>
      <div className={classes.imgBox}>
        {props.disabled && (
          <p className={classes.notAvailable}>Not Available</p>
        )}
        <img
          src={props.image}
          alt={`${props.make}  ${props.model} `}
          className={classes.img}
        />
      </div>

      <div className={classes.content}>
        <div className={classes.details}>
          <h3 className={`${classes.model} heading-3`}>{props.model}</h3>
          <p className={classes.displacement}>{props.displacement}</p>
          <div className={classes.svgStars}>{rateStar}</div>
          <p className={classes.price}>Starting from {formattedPrice}/day</p>
        </div>
        <ButtonShop
          class={classes.btn}
          onShowModal={props.onShowModal}
          disabled={props.disabled}
        />
      </div>
    </li>
  );
};

export default Product;
