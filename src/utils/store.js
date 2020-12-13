import React, { createContext, useState } from 'react';

export const StoreContext = createContext(null)

export default (props) => {
  const [ item, setItem ] = useState("React Context Boilerplate");

  const store = {
    item,
    setItem
  };

  return <StoreContext.Provider value={store}>{props.children}</StoreContext.Provider>
};