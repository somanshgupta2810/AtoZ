import React from "react";
import C from "./C";
function B({ count, setCount }) {
  return (
    <div className="bg-green-300 p-7 min-h-screen">
      <C count={count} setCount={setCount} />
    </div>
  );
}

export default B;
