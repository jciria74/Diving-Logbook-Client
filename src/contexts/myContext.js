import React, { createContext, useState } from "react";

export const MyContext = createContext();

const MyContextProvider = (props) => {
  const [myState, setMyState] = useState("");

  return (
    <MyContext.Provider value={{ myState, setMyState }}>
      {props.children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;
