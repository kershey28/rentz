import classes from './Footer.module.css';

const Footer = props => {
  return (
    <footer className={classes.footer}>
      <ul className={classes.nav}>
        <li className={classes.item}>
          <a href="https://newtral.netlify.app/" className={classes.link}>
            Feedbacks
          </a>
        </li>
        <li className={classes.item}>
          <a href="https://callsaul.netlify.app/" className={classes.link}>
            Contact me
          </a>
        </li>
        <li className={classes.item}>
          <a href="https://cashybank.netlify.app/" className={classes.link}>
            Projects
          </a>
        </li>
        <li className={classes.item}>
          <a href="https://yourtrips.netlify.app/" className={classes.link}>
            Privacy Policy
          </a>
        </li>
        <li className={classes.item}>
          <a href="https://gorecipe.netlify.app/" className={classes.link}>
            Terms
          </a>
        </li>
      </ul>
      <div className={classes.copyright}>
        <p>
          Built and designed by your Pinoy web developer for demo project only.
        </p>
        <p>Disclaimer: photos were used are not mine.</p>
        <p>&copy; Kershey Cariño 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
