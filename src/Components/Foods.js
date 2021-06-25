import React from 'react';
import PropTypes from 'prop-types';

const Foods = ({ foods }) => (
  <div>
    {foods && foods.map((food) => <p key={food.idMeal}>{food.idMeal}</p>)}
    {console.log(foods[0])}
  </div>
);

Foods.propTypes = {
  foods: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Foods;
