import CoffeeMachine from "../../assets/machine-icon.jpg";
import CoffeeGrinder from "../../assets/grinder-icon.jpg";
import PourOver from "../../assets/pourover-icon.jpg";
import Kettle from "../../assets/kettle-icon.jpg";
import FrenchPress from "../../assets/frenchpress-icon.jpg";

const INITIAL_STATE = {
  sections: [
    {
      title: "Kettles",
      imageUrl: Kettle,
      id: 4,
      linkUrl: "shop/kettles",
    },
    {
      title: "Coffee Grinders",
      imageUrl: CoffeeGrinder,
      id: 2,
      linkUrl: "shop/coffeegrinders",
    },
    {
      title: "French Presses",
      imageUrl: FrenchPress,
      // size: "large",
      id: 5,
      linkUrl: "shop/frenchpresses",
    },
    {
      title: "Coffee Machines",
      imageUrl: CoffeeMachine,
      // size: "large",
      id: 1,
      linkUrl: "shop/coffeemachines",
    },
    {
      title: "Pour Overs",
      imageUrl: PourOver,
      id: 3,
      linkUrl: "shop/pourovers",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
