import Modal from './Modal';
import Policy from './Policy';
import RentalForm from '../components/form/RentalForm';
import { ButtonClose } from '../components/buttons/ButtonOps';

import { useState } from 'react';

import classes from './PopupForm.module.css';

const PopupForm = props => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const showFormSubmittedHandler = () => {
    setFormSubmitted(true);
  };

  const submitMessage =
    'Please wait the call from one of our representatives to discuss further the details of your rental. Thank you for choosing Rentz.';

  return (
    <Modal onClick={props.onClose}>
      <div className={classes.container}>
        {!formSubmitted && <Policy />}
        {!formSubmitted && (
          <RentalForm onShowSubmitted={showFormSubmittedHandler} />
        )}
        <ButtonClose onClick={props.onClose} class={classes.btn} />
        {formSubmitted && (
          <p className={classes.submitMessage}>{submitMessage}</p>
        )}
      </div>
    </Modal>
  );
};

export default PopupForm;
