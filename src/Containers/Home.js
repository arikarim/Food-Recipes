import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import FilterContainer from './FilterContainer';
import { addFoods } from '../Actions/Foods';
import FoodList from './FoodList';

const FoodItems = ({ addFoods }) => {
  const fetch = async () => {
    const { data } = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=c');
    addFoods(data.meals);
  };

  useEffect(() => {
    fetch();
  }, []);
  return (
    <div>
      <FilterContainer />
      <FoodList />
    </div>
  );
};

FoodItems.propTypes = {
  addFoods: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addFoods: (data) => dispatch(addFoods(data)),
});

export default connect(null, mapDispatchToProps)(FoodItems);
