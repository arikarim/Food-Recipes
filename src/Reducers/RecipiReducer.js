const recipieReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FOODS':
      return [
        ...action.foods,
      ];
    case 'UPDATE_FOODS':
      return state.map((mv) => (mv.id === action.id ? { ...mv, ...action.update } : mv));
    default:
      return state;
  }
};

export default recipieReducer;
