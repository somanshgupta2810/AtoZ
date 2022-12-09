import React from "react";
import B from "./B";
import { useState } from "react";
function A() {
  const [count, setCount] = useState(0);
  return (
    <div className="bg-red-300 p-5 min-h-screen">
      <B count={count} setCount={setCount} />
    </div>
  );
}

export default A;
