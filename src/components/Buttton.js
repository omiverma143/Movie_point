import React from "react";

export const Buttton = ({ children }) => {
  return (
    <button className="w-64 rounded-lg font-medium px-5 py-2 m-2 text-white bg-gradient-to-r from-cyan-300 to-cyan-700 hover:bg-gradient-to-r from-cyan-500 to-cyan-900">
      {children}
    </button>
  );
};
