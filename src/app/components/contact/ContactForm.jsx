import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Grid, TextField, Button } from '@material-ui/core';
import './ContactForm.css';

const ContactForm = ({
  name,
  email,
  subject,
  message,
  errors,
  onChangeCallback,
  onSubmitCallback,
}) => {
  const onChange = e => onChangeCallback(e);

  const onSubmit = e => onSubmitCallback(e);

  return (
    <Grid container justify="center">
      <Grid item xs={11} sm={8} md={6} lg={4}>
        <form
          onSubmit={onSubmit}
          className="contact-form"
          noValidate
          autoComplete="off"
        >
          <Typography variant="body1" paragraph>
            Contact me by filling the form below. You will receive a
            confirmation mail with your message and I will get back at you at my
            earliest convenience.
          </Typography>
          <TextField
            className="contact-form__input"
            variant="outlined"
            label="Name"
            type="name"
            name="name"
            value={name}
            onChange={onChange}
            // error={errors.name}
            // helperText={errors ? errors.name : ''}
          />
          <TextField
            className="contact-form__input"
            variant="outlined"
            label="Email Address"
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            // error={errors.email}
            // helperText={errors ? errors.email : ''}
          />
          <TextField
            className="contact-form__input"
            variant="outlined"
            label="Subject"
            type="subject"
            name="subject"
            value={subject}
            onChange={onChange}
            // error={errors.subject}
            // helperText={errors ? errors.subject : ''}
          />
          <TextField
            className="contact-form__input"
            variant="outlined"
            label="Message"
            multiline
            rows="7"
            name="message"
            value={message}
            onChange={onChange}
            // error={errors.message}
            // helperText={errors ? errors.message : ''}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            value="Submit"
            className="contact-form__submit"
          >
            Submit
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};

ContactForm.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  errors: PropTypes.shape({}).isRequired,
  onChangeCallback: PropTypes.func.isRequired,
  onSubmitCallback: PropTypes.func.isRequired,
};

export default ContactForm;
