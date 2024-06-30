import { useContext } from "react";
// import { ColorConsumer } from "../contexts/color";
import ColorContext from "../contexts/color";

const colors = [
  "bg-red-500",
  "bg-orange-500",
  "bg-yellow-500",
  "bg-green-500",
  "bg-blue-500",
  "bg-indigo-500",
];

const SelectColors = () => {
  const { actions } = useContext(ColorContext);
  return (
    <div>
      <h2 className="my-4 text-2xl font-bold">색상을 선택하세요.</h2>
      <div className="flex">
        {colors.map((color) => (
          <div
            className={`w-[24px] h-[24px] ${color} cursor-pointer`}
            key={color}
            onClick={() => actions.setColor(color)}
            onContextMenu={(e) => {
              e.preventDefault();
              actions.setSubcolor(color);
            }}
          />
        ))}
      </div>
      <hr className="my-4" />
    </div>
  );
};

export default SelectColors;
