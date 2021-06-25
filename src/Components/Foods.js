import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Foods = ({ foods }) => {
  useEffect(() => {
    console.log(foods);
  }, []);

  return (
    <div>
      ok
      {console.log(foods)}
    </div>
  );
};

Foods.propTypes = {
  foods: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Foods;
