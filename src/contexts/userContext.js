import React, { createContext, useState } from 'react';

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [userState, setUserState] = useState({ dives: '' });

  return (
    <UserContext.Provider value={{ userState, setUserState }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
