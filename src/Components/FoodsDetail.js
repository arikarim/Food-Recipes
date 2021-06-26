import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import { updateFoods } from '../Actions/Foods';

const FoodsDetail = ({ food, updateFoods }) => {
  const fetch = async () => {
    const { data } = axios.get(`www.themealdb.com/api/json/v1/1/lookup.php?i=${food.idMeal}`);
    const result = data.meals;
    console.log(result);
    updateFoods(food.idMeal, {
      description: result.strDescription,
    });
  };

  useEffect(() => {
    fetch();
  }, []);
  return (
    <div>
      Details
    </div>
  );
};

FoodsDetail.propTypes = {
  food: PropTypes.objectOf(PropTypes.object).isRequired,
  updateFoods: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({
  food: state.foods.find((food) => food.idMeal === props.match.params.id),
});

const mapDispatchToProps = (dispatch) => ({
  updateFoods: (id, update) => dispatch(updateFoods(id, update)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FoodsDetail);
