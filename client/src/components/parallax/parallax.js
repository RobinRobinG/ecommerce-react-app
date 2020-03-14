import React from "react";
import FrenchPressImage from "../../assets/frenchpress-cover.jpg";
import KettleImage from "../../assets/kettle-cover.jpg";
import CoffeeMachineImage from "../../assets/machine-cover.jpg";
import CoffeeGrinderImage from "../../assets/grinder-cover.jpg";
import PourOverImage from "../../assets/pourover-cover.jpg";
import "./parallax.scss";

let imageUrl = "";
const Parallax = ({ title }) => {
  switch (title) {
    case "FrenchPresses":
      imageUrl = FrenchPressImage;
      break;
    case "Kettles":
      imageUrl = KettleImage;
      break;
    case "CoffeeMachines":
      imageUrl = CoffeeMachineImage;
      break;
    case "CoffeeGrinders":
      imageUrl = CoffeeGrinderImage;
      break;
    case "PourOvers":
      imageUrl = PourOverImage;
      break;
    default:
      break;
  }

  const displayTitle = title.split(/(?=[A-Z])/).join(" ");

  return (
    <div
      className="parallax"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <h2 className="title">{displayTitle}</h2>
    </div>
  );
};

export default Parallax;
