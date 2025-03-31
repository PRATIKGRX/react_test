import React, { createContext, useState, useContext } from 'react';

// Create a Context
const TestContext = createContext();

// Create a Provider component
export const TestProvider = ({ children }) => {
  const [name, setName] = useState('Test Name');


  const handleNameChange=()=>{
    setName("hello")
  }

  return (
    <TestContext.Provider value={{ name, setName,handleNameChange }}>
      {children}
    </TestContext.Provider>
  );
};

// Custom hook to use the context
export const useTestContext = () => {
  return useContext(TestContext);
};


