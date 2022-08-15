import React from "react";

export default function Header() {
  return (
    <div className="flex flex-col items-center gap-2">
      <h1 className="text-3xl font-semibold text-slate-800">Tenzies</h1>
      <p className="w-3/5 text-center text-slate-900">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls
      </p>
    </div>
  );
}
