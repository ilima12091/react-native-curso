import React from "react";

export const BasicFunctions = () => {
  const addTwoNumbers = (a: number, b: number) => {
    return a + b;
  };

  return (
    <>
      <h3>Funciones</h3>
      <span>El resultado de sumar: {addTwoNumbers(1, 2)}</span>
    </>
  );
};
