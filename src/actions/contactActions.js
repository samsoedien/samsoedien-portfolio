import axios from 'axios';
import { setAlert } from './alertActions';

import {
  SEND_EMAIL_SUCCESS,
  SEND_EMAIL_FAIL,
  GET_ERRORS,
  CLEAR_ERRORS,
} from '../constants/types';

// Clear errors
export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});

export const emailContact = formData => async dispatch => {
  dispatch(clearErrors());
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const res = await axios.post(
      'https://us-central1-samsoedien-portfolio.cloudfunctions.net/contact',
      formData,
      config,
    );
    dispatch({
      type: SEND_EMAIL_SUCCESS,
      payload: res.data,
    });
    dispatch(
      setAlert('Thank you for your message, it has been sent successfully!'),
    );
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: SEND_EMAIL_FAIL,
    });
  }
};
