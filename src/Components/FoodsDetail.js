import React from 'react';
import { connect } from 'react-redux';
import { updateFoods } from '../Actions/Foods';
// import PropTypes from 'prop-types';

const FoodsDetail = () => (
  <div />
);

// FoodsDetail.propTypes = {

// };

const mapStateToProps = (state, props) => ({
  food: state.foods.find((food) => food.idMeal === props.match.params.id),
});

const mapDispatchToProps = (dispatch) => ({
  updateFoods: (id, update) => dispatch(updateFoods(id, update)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FoodsDetail);
