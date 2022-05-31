import classes from './Logo.module.css';

const Logo = props => {
  return (
    <div className={`${classes.container} ${props.class}`}>
      <span className={classes.text}>{props.text}</span>
      <div className={classes.imgBox}>
        <img src={props.logoImg} alt={props.text} className={classes.logo} />
      </div>
    </div>
  );
};

export default Logo;
