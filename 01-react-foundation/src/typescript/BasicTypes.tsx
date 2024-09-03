import React from "react";

export const BasicTypes = () => {
  const name: string = "Test";
  const age: number = 123;
  const isActive: boolean = true;
  const powers: string[] = ["power1", "power2", "power3"];

  return (
    <>
      <h3>Tipos básicos</h3>
      {name} {age} {isActive ? "activo" : "inactivo"}
      <br />
      {powers.join(", ")}
    </>
  );
};
