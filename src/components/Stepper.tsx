import React from "react";

export default function Stepper({ title, desc }) {
  return (
    <div className="circles">
      <div className="px-2">
        <h3 className="dark:text-white text-base ">{title}</h3>
        <p className="dark:text-white my-2 text-sm font-medium">{desc}</p>
      </div>
    </div>
  );
}
