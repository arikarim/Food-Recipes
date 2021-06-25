import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Foods from '../Components/Foods';

const FoodList = ({ foods }) => (
  <div>
    <Foods foods={foods} />
  </div>
);

FoodList.propTypes = {
  foods: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  foods: state.foods,
});

export default connect(mapStateToProps)(FoodList);
