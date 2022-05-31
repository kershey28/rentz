import useInput from '../../helpers/use-input';
import ButtonCTA from '../buttons/ButtonCTA';
import { SVGForm } from '../../components/icons/SVG';

import classes from './RentalForm.module.css';

// Validation variables
const isNotEmpty = value => value.trim() !== '';
const isEmail = value => value.includes('@');
const isPhone = value => value.length === 11 && value.startsWith('0');

const RentalForm = props => {
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(isNotEmpty);
  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput(isNotEmpty);
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);
  const {
    value: phoneValue,
    isValid: phoneIsValid,
    hasError: phoneHasError,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
    reset: resetPhone,
  } = useInput(isPhone);

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid && phoneIsValid) {
    formIsValid = true;
  }

  const submitHandler = event => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    props.onShowSubmitted();

    // resets
    resetFirstName();
    resetLastName();
    resetEmail();
    resetPhone();
  };

  const firstNameClasses = firstNameHasError
    ? `${classes['form-control']} ${classes.invalid}`
    : `${classes['form-control']} `;
  const lastNameClasses = lastNameHasError
    ? `${classes['form-control']} ${classes.invalid}`
    : `${classes['form-control']} `;
  const emailClasses = emailHasError
    ? `${classes['form-control']} ${classes.invalid}`
    : `${classes['form-control']} `;
  const phoneClasses = phoneHasError
    ? `${classes['form-control']} ${classes.invalid}`
    : `${classes['form-control']} `;

  return (
    <form onSubmit={submitHandler} className={classes.container}>
      <div className={classes.guideBox}>
        <SVGForm class={classes.svg} />
        <p className={classes.guide}>
          Please fill out the form and then a representative will contact you
          within 2-3 business days.
        </p>
      </div>

      <div className={classes['control-group']}>
        <div className={firstNameClasses}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={firstNameValue}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          <p
            className={
              firstNameHasError ? classes['error-text'] : classes.hidden
            }
          >
            Please enter your first name.
          </p>
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastNameValue}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          <p
            className={
              lastNameHasError ? classes['error-text'] : classes.hidden
            }
          >
            Please enter your last name.
          </p>
        </div>
        <div className={emailClasses}>
          <label htmlFor="email">E-Mail Address</label>
          <input
            type="text"
            id="email"
            value={emailValue}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            placeholder="name@gmail.com"
          />
          <p className={emailHasError ? classes['error-text'] : classes.hidden}>
            Please enter your valid email address.
          </p>
        </div>
        <div className={phoneClasses}>
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="text"
            id="phoneNumber"
            value={phoneValue}
            onChange={phoneChangeHandler}
            onBlur={phoneBlurHandler}
            placeholder="09xxxxxxxxx"
          />
          <p className={phoneHasError ? classes['error-text'] : classes.hidden}>
            Please enter your valid phone number.
          </p>
        </div>
      </div>

      <div className={classes['form-actions']}>
        <ButtonCTA
          text="Submit"
          disabled={!formIsValid}
          class={classes.btn}
          onSubmit={submitHandler}
        />
      </div>
    </form>
  );
};

export default RentalForm;
