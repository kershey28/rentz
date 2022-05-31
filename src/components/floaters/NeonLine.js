import classes from './NeonLine.module.css';

const NeonLine = props => {
  return <div className={`${classes.line} ${props.class}`}></div>;
};

export default NeonLine;
