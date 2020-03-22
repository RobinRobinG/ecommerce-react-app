import CoffeeMachine from '../../assets/machine-icon.svg';
import CoffeeGrinder from '../../assets/grinder-icon.svg';
import PourOver from '../../assets/pourover-icon.svg';
import Kettle from '../../assets/kettle-icon.svg';
import FrenchPress from '../../assets/frenchpress-icon.svg';

const INITIAL_STATE = {
  sections: [
    {
      title: 'Kettles',
      imageUrl: Kettle,
      id: 4,
      linkUrl: 'shop/kettles',
    },
    {
      title: 'Coffee Grinders',
      imageUrl: CoffeeGrinder,
      id: 2,
      linkUrl: 'shop/coffeegrinders',
    },
    {
      title: 'French Presses',
      imageUrl: FrenchPress,
      // size: "large",
      id: 5,
      linkUrl: 'shop/frenchpresses',
    },
    {
      title: 'Coffee Machines',
      imageUrl: CoffeeMachine,
      // size: "large",
      id: 1,
      linkUrl: 'shop/coffeemachines',
    },
    {
      title: 'Pour Overs',
      imageUrl: PourOver,
      id: 3,
      linkUrl: 'shop/pourovers',
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
