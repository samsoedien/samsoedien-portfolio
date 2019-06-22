import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Snackbar, SnackbarContent, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import './Alert.css';

const Alert = ({ alerts }) => {
  const [open, setOpen] = useState(true);

  const handleClick = () => setOpen(true);

  const handleClose = (e, reason) => {
    if (reason === 'clickaway') return;
    setOpen(false);
  };

  return (
    alerts !== null &&
    alerts.length > 0 &&
    alerts.map(alert => (
      <div key={alert.id}>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          action={[
            <IconButton key="close" aria-label="Close" color="success">
              <CloseIcon />
            </IconButton>,
          ]}
        >
          <SnackbarContent
            message={alert.msg}
            className={`alert alert-${alert.alertType}`}
          />
        </Snackbar>
      </div>
    ))
  );
};

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
