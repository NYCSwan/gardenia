import React from 'react';
import PropTypes from 'prop-types';
import { auth } from './firebase';

// user gets passed into CU from App.react
const CurrentUser = ({ user }) => {
  return (
    <div className="CurrentUser">
      <img
        className="CurrentUser-photo"
        alt={ user.displayName }
        src={ user.photoURL }
      />
      <div className="CurrentUser-identification">
        <h3>{ user.displayName }</h3>
        <p>{ user.email }</p>
        <button onClick={() => auth.signOut() }>
          Sign Out
        </button>
      </div>
    </div>
  );
};

CurrentUser.propTypes = {
  user: PropTypes.shape({
    displayName: PropTypes.string,
    email: PropTypes.string.isRequired,
    photoURL: PropTypes.string,
    uid: PropTypes.string.isRequired
  })
};

export default CurrentUser;
