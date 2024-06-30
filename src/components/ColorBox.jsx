/* eslint-disable no-unused-vars */
import ColorContext from "../contexts/color";

const ColorBox = () => {
  return (
    <ColorContext.Consumer>
      {/* {(value) => <div className={`w-[64px] h-[64px] bg-black`} />} */}
      {() => <div className={`w-[64px] h-[64px] bg-black`} />}
      {/* <div className={`w-[64px] h-[64px] bg-black`} /> */}
    </ColorContext.Consumer>
  );
};

export default ColorBox;
