import React from 'react';
import PropTypes from 'prop-types';
import { auth } from './firebase';
import './CurrentUser.css';

// user gets passed into CurrentUserU from App.react
const CurrentUser = ({ user }) => {
  return (
    <div className="CurrentUser">
      <img className="CurrentUser-photo" alt={user.displayName} />
      <div className="CurrentUser-identification">
        <h3>
          {user.displayName}
        </h3>
      </div>
    </div>
  );
};

CurrentUser.propTypes = {
  user: PropTypes.shape({
    displayName: PropTypes.string
  })
};

export default CurrentUser;
