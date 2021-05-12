import { Fragment } from 'react';
import AvialableMeals from './AviailableMeals';
import MealsSummary from './MealsSummary';

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvialableMeals />
    </Fragment>
  );
};

export default Meals;
