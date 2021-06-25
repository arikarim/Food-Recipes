import React from 'react';
import PropTypes from 'prop-types';

const Foods = ({ foods }) => (
  <div className="d-flex flex-wrap justify-content-between">
    {foods && foods.map((food) => (
      <div key={food.idMeal} className="card" style={{ width: '18rem' }}>
        <img src={food.strMealThumb} alt={food.strMeal} />
        <div className="card-body">
          <h3>{food.strMeal}</h3>
          <p className="card-text">{food.strArea}</p>
        </div>
      </div>
    ))}
    {console.log(foods[0])}
  </div>
);

Foods.propTypes = {
  foods: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Foods;
