import React, { useContext } from "react";
import { countContext } from "./A";

function C() {
  const data = useContext(countContext);
  function changeCount() {
    data.setCount(data.count + 1);
  }
  function handleSQARE() {
    data.setsquare(data.count * data.count);
  }
  return (
    <div className=" p-5 text-yellow-800 bg-yellow-200 min-h-screen flex flex-col m-2">
      <div>Count is {data.count}</div>
      <div>Square is {data.square}</div>
      <button onClick={changeCount} className="text-red-300 bg-purple-400 p-5">
        Count
      </button>
      <button
        onClick={handleSQARE}
        className="text-red-300 bg-purple-400 p-5 my-5"
      >
        Square
      </button>
    </div>
  );
}

export default C;
