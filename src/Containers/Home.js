import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { bindActionCreators } from 'redux';
import axios from 'axios';
import { addFoods } from '../Actions/Foods';
import FoodList from './FoodList';

const FoodItems = ({ addFoods }) => {
  const fetch = async () => {
    const { data } = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=b');
    // console.log(data.meals);
    addFoods(data.meals);
  };

  useEffect(() => {
    fetch();
  }, []);
  return (
    <div>
      <FoodList />
    </div>
  );
};

FoodItems.propTypes = {
  // items: PropTypes.objectOf(PropTypes.object).isRequired,
  addFoods: PropTypes.func.isRequired,
};

// const mapStateToProps = (state) => ({
//   items: state.Items
// })

const mapDispatchToProps = (dispatch) => ({
  addFoods: (data) => dispatch(addFoods(data)),
});

export default connect(null, mapDispatchToProps)(FoodItems);
