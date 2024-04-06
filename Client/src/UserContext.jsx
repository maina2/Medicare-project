import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [userType, setUserType] = useState('');

  return (
    <UserContext.Provider value={{ userType, setUserType }}>
      {children}
    </UserContext.Provider>
  );
};

UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserContextProvider;