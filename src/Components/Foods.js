import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Foods = ({ foods }) => (
  <div className="d-flex flex-wrap justify-content-between">
    {foods && foods.map((food) => (
      <Link key={`/${food.idMeal}`} to={foods.idMeal}>
        <div className="card my-2" style={{ width: '18rem' }}>
          <img src={food.strMealThumb} alt={food.strMeal} />
          <div className="card-body">
            <h3>{food.strMeal}</h3>
            <p className="card-text">{food.strArea}</p>
          </div>
        </div>
      </Link>
    ))}
    {console.log(foods[0])}
  </div>
);

Foods.propTypes = {
  foods: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Foods;
