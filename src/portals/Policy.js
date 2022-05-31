import classes from './Policy.module.css';

const Policy = props => {
  return (
    <div className={classes.container}>
      <h2 className={`${classes.heading} heading-2`}>Rental Requirements</h2>
      <ul className={classes.list}>
        <li className={classes.item}>
          A security deposit of{' '}
          <span className={classes.itemStress}>₱10,000</span> for daily rental
          and <span className={classes.itemStress}>₱20,000</span> for weekly.
        </li>
        <li className={classes.item}>
          <span className={classes.itemStress}>
            2 Valid Government issued ID's
          </span>{' '}
          UMID, SSS, Driver's license, Passport etc.
        </li>
        <li className={classes.item}>
          <span className={classes.itemStress}>1 Valid ID </span> and
          <span className={classes.itemStress}> 1 Valid mistress </span>
          will have to be surrendered once you pick up or we drop off your
          motor.
        </li>
      </ul>
    </div>
  );
};

export default Policy;
