import React from "react";

interface Address {
  country: string;
  houseNumber: number;
}

interface Person {
  firstName: string;
  lastName: string;
  age: number;
  address: Address;
  isAlive?: boolean;
}

export const ObjectLiterals = () => {
  const person: Person = {
    age: 35,
    firstName: "Test",
    lastName: "Test",
    address: {
      country: "Uruguay",
      houseNumber: 123,
    },
  };

  return (
    <>
      <h3>Objetos literales</h3>
      <pre>{JSON.stringify(person, null, 2)}</pre>
    </>
  );
};
