import classes from './HorizontalLine.module.css';

const HorizontalLine = props => {
  return <hr className={`${classes.line} ${props.class}`}></hr>;
};

export default HorizontalLine;
