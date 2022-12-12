import React from "react";
import B from "./B";
import { useState } from "react";
export const countContext = React.createContext();
function A() {
  const [count, setCount] = useState(0);
  const [square, setsquare] = useState(0);
  const data = { count, setCount, square, setsquare };
  return (
    <div className="bg-red-300 p-5 min-h-screen">
      <countContext.Provider value={data}>
        <B />
      </countContext.Provider>
    </div>
  );
}

export default A;
