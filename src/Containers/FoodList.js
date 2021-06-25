import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const FoodList = (props) => (
  <div />
);

FoodList.propTypes = {

};

const mapStateToProps = (state) => ({
  movies: getVisibleMovies(state.movies, state.filters),
});

export default connect(mapStateToProps)(FoodList);
