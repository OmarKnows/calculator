import React from "react";

const Display = ({ result }) => {
  let op1 = "";
  let op2 = result;
  let newResult = op1.concat(op2);
  return (
    //looks stupid when h1 is empty
    <div className="mx-5 mt-5 border border-secondary rounded bg-dark ">
      <h1 className=" text-center text-white">{newResult}</h1>
    </div>
  );
};

export default Display;
