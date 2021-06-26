import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateFoods } from '../Actions/Foods';

const FoodsDetail = ({ food }) => (
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
FoodsDetail.propTypes = {
  food: PropTypes.shape({
    idMeal: PropTypes.string.isRequired,
    strMeal: PropTypes.string.isRequired,
    strArea: PropTypes.string.isRequired,
    strCategory: PropTypes.string.isRequired,
    strInstructions: PropTypes.string.isRequired,
    strMealThumb: PropTypes.string.isRequired,
    title: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = (state, props) => ({
  food: state.foods.find((f) => f.idMeal === props.match.params.id),
});

const mapDispatchToProps = (dispatch) => ({
  updateFoods: (id, update) => dispatch(updateFoods(id, update)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FoodsDetail);
