/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

const ColorContext = createContext({
  state: { color: 'bg-black', subcolor: 'bg-red-500' },
  actions: {
    setColor: () => {},
    setSubcolor: () => {},
  },
});

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState('bg-black');
  const [subcolor, setSubcolor] = useState('bg-red-500');

  const value = {
    state: { color, subcolor },
    actions: { setColor, setSubcolor },
  };

  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

const { Consumer: ColorConsumer } = ColorContext;

export { ColorProvider, ColorConsumer };

export default ColorContext;
