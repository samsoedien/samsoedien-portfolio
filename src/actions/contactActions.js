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
      setAlert(
        'Thank you for your message, it has been sent successfully!',
        'success',
      ),
    );
  } catch (err) {
    // const errors = err.response.data.errors;
    // if (errors) {
    //   errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    // }
    // dispatch({
    //   type: SEND_EMAIL_FAIL,
    // });

    const errorArray = err.response.data.errors;

    const errors = {};
    errorArray.forEach(error => {
      if (error.param === 'name') errors.name = error.msg;
      if (error.param === 'email') errors.email = error.msg;
      if (error.param === 'subject') errors.subject = error.msg;
      if (error.param === 'message') errors.message = error.msg;
    });

    dispatch({
      type: GET_ERRORS,
      payload: errors,
    });
  }
};
