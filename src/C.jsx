import React from "react";

function C({ count, setCount }) {
  function changeCount() {
    setCount(count + 1);
  }
  return (
    <div className=" p-5 text-yellow-800 bg-yellow-200 min-h-screen">
      <div>Count is {count}</div>
      <button onClick={changeCount} className="text-red-300 bg-purple-400 p-5">
        Count
      </button>
    </div>
  );
}

export default C;
