import React from 'react';
import PropTypes from 'prop-types';

const Foods = ({ foods }) => (
  <div>
    {foods && foods.map((food) => (
      <div key={food.idMeal}>
        <img src={food.strMealThumb} alt={food.strMeal} />
        <h3>{food.strMeal}</h3>
        <p>{food.strInstructions}</p>
      </div>
    ))}
    {console.log(foods[0])}
  </div>
);

Foods.propTypes = {
  foods: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Foods;
