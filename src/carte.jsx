import React from "react";
const Carte = () => {
  const titlu = "Harry Potter si Piatra Filosofală";

  return (
    //  Urmeaza cod JSX
    <div>
      <h3>{titlu.toUpperCase()}</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <p>J.K. Rowling. Preț: 30.32 Lei</p>
    </div>
  );
};

export default Carte;
