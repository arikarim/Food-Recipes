import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';
import setTitleFilter from '../Actions/Filter';
import { addFoods } from '../Actions/Foods';

const FilterContainer = ({ addFoods }) => {
  const [input, setInput] = useState('');
  const fetch = async () => {
    try {
      const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${input}`);
      addFoods(data.meals);
    } catch (err) {
      const el = document.querySelector('.error');
      el.innerHTML = 'We are sorry, please try again';
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch();
    setInput('');
    e.target.firstChild.value = '';
  };
  return (
    <div className="my-3">
      <form onSubmit={handleSubmit} className="d-flex justify-content-center">
        <input maxLength="1" placeholder="Search by first letter" onChange={(e) => setInput(e.target.value)} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

FilterContainer.propTypes = {
  addFoods: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  filters: state.filters,
});

const mapDispatchToProps = (dispatch) => ({
  setTitleFilter: (title) => dispatch(setTitleFilter(title)),
  addFoods: (data) => dispatch(addFoods(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterContainer);
