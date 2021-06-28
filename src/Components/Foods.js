import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Foods = ({ foods }) => (
  <div className="d-flex flex-wrap justify-content-between">
    {foods && foods.map((food) => (
      <Link className="text-decoration-none link-dark" key={food.idMeal} to={`/${food.idMeal}`}>
        <div className="card my-2" style={{ width: '18rem', height: '30rem' }}>
          <img src={food.strMealThumb} alt={food.strMeal} />
          <div className="card-body">
            <h3>{food.strMeal}</h3>
            <p className="card-text">{food.strArea}</p>
            <p className="card-text position-absolute bottom-0">{food.strCategory}</p>
          </div>
        </div>
      </Link>
    ))}
  </div>
);

Foods.propTypes = {
  foods: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Foods;
