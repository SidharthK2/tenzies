import React from "react";

export default function Dice(props) {
  const style = {
    backgroundColor: props.isHeld ? "#59E391" : "#9c9c9c",
  };
  return (
    <div
      style={style}
      onClick={props.onHold}
      className="rounded-md w-14 h-14 flex justify-center items-center font-bold shadow-lg">
      {props.value}
    </div>
  );
}
