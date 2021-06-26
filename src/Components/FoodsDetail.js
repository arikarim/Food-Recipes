import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import { updateFoods } from '../Actions/Foods';

const FoodsDetail = ({ food }) => {
  const [foodDetail, setFoodDetail] = useState({});
  const fetch = async () => {
    try {
      const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${food.idMeal}`);
      // updateFoods(food.idMeal, {
      //   description: result.strDescription,
      // });
      setFoodDetail(data.meals[0]);
      console.log(foodDetail);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetch();
  }, []);
  return (
    <div className="container mx-auto">
      <div className="card my-2 mx-auto" style={{ width: '70vw' }}>
        <img src={food.strMealThumb} alt={food.strMeal} />
        <div className="card-body">
          <h3>{food.strMeal}</h3>
          <p className="card-text">{food.strArea}</p>
          <p className="card-text">{food.strCategory}</p>
          Instructions:
          <p className="card-text">{food.strInstructions}</p>
        </div>
      </div>
    </div>
  );
};

FoodsDetail.propTypes = {
  food: PropTypes.objectOf(PropTypes.object).isRequired,
  // updateFoods: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({
  food: state.foods.find((f) => f.idMeal === props.match.params.id),
});

const mapDispatchToProps = (dispatch) => ({
  updateFoods: (id, update) => dispatch(updateFoods(id, update)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FoodsDetail);
