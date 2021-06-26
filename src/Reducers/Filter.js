const defaultFiltersState = {
  title: '',
};

const filtersReducer = (state = defaultFiltersState, action) => {
  switch (action.type) {
    case 'SET_TITLE_FILTER':
      return {
        ...state,
        title: action.title,
      };
    default:
      return state;
  }
};

export default filtersReducer;
