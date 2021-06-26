import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Foods from '../Components/Foods';

const FoodList = ({ foods }) => {
  const [input, setInput] = useState('');
  const [foodsFilter, setFoodsFilter] = useState(foods);

  const handler = (e) => {
    e.preventDefault();
    const f = foods.filter((f) => f.strMeal.toUpperCase().includes(input.toUpperCase()));
    setFoodsFilter(f);
  };
  useEffect(() => {
    setFoodsFilter(foods);
    console.log(foodsFilter);
  }, []);
  return (
    <div>
      <form onSubmit={handler} className="d-flex justify-content-center">
        <input onChange={(e) => setInput(e.target.value)} placeholder="filter by name" />
        <button type="submit">Filter</button>
      </form>
      <Foods foods={foodsFilter.length > 0 ? foodsFilter : foods} />
    </div>
  );
};

FoodList.propTypes = {
  foods: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  foods: state.foods,
});

export default connect(mapStateToProps)(FoodList);
