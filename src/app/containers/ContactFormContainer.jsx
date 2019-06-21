import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { emailContact } from '../../actions/contactActions';

import ContactForm from '../components/contact/ContactForm';
import Alert from '../components/layout/Alert';

const ContactFormContainer = ({ emailContact }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    errors: {},
  });

  const { name, email, subject, message, errors } = formData;

  const onChangeCallback = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmitCallback = e => {
    e.preventDefault();
    const contactData = {
      name,
      email,
      subject,
      message,
    };
    emailContact(contactData);
  };

  return (
    <Fragment>
      <ContactForm
        name={name}
        email={email}
        subject={subject}
        message={message}
        errors={errors}
        onChangeCallback={onChangeCallback}
        onSubmitCallback={onSubmitCallback}
      />
      <Alert />
    </Fragment>
  );
};

ContactFormContainer.propTypes = {
  emailContact: PropTypes.func.isRequired,
};

export default connect(
  null,
  { emailContact },
)(ContactFormContainer);
