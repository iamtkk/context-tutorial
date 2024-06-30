/* eslint-disable no-unused-vars */
import { useContext } from "react";
import ColorContext from "../contexts/color";

const ColorBox = () => {
  const { state } = useContext(ColorContext);
  return (
    <>
      <div className={`w-[64px] h-[64px] ${state.color}`} />
      <div className={`w-[32px] h-[32px] ${state.subcolor}`} />
    </>
  );
};

export default ColorBox;
