import React, { useState } from "react";

export default function Roll(props) {
  return (
    <div className="flex space-x-2 justify-center">
      <button
        onClick= {props.tenzies ? props.newGame : props.clickHandler}
        type="button"
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
        className="inline-block text-base px-6 py-2.5 bg-blue-600 text-white font-semibold leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
        {props.tenzies ? "New Game" : "Roll"}
      </button>
    </div>
  );
}
