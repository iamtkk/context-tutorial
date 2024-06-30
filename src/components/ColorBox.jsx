/* eslint-disable no-unused-vars */
import ColorContext from '../contexts/color';

const ColorBox = () => {
  return (
    <ColorContext.Consumer>
      {({ state }) => (
        <>
          <div className={`w-[64px] h-[64px] ${state.color}`} />
          <div className={`w-[32px] h-[32px] ${state.subcolor}`} />
        </>
      )}
    </ColorContext.Consumer>
  );
};

export default ColorBox;
