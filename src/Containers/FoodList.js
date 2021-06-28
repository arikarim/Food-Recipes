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
    setInput('');
    e.target.firstChild.value = '';
    if (f.length === 0) {
      const el = document.querySelector('.error');
      el.innerHTML = 'We are sorry, No records found';
    }
  };
  useEffect(() => {
    setFoodsFilter(foods);
  }, [foods]);
  return (
    <div>
      <form onSubmit={handler} className="d-flex justify-content-center">
        <input className="form-control" minLength="2" onChange={(e) => setInput(e.target.value)} placeholder="filter by name" />
        <button className="btn btn-dark" type="submit">Filter</button>
      </form>
      <div className="my-3 text-center error" />
      <Foods foods={foodsFilter || foods} />
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
