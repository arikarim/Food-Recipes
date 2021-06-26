import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import setTitleFilter from '../Actions/Filter';

const FilterContainer = () => (
  <div className="my-3">
    <form className="d-flex justify-content-center">
      <input />
      <button type="submit">Search</button>
    </form>
  </div>
);

FilterContainer.propTypes = {

};

const mapStateToProps = (state) => ({
  filters: state.filters,
});

const mapDispatchToProps = (dispatch) => ({
  setTitleFilter: (title) => dispatch(setTitleFilter(title)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterContainer);
