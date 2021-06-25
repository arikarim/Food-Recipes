export const addFoods = (foods = []) => ({
  type: 'ADD_FOODS',
  foods,
});

export const updateFoods = (id = '', update = {}) => ({
  type: 'UPDATE_FOODS',
  id,
  update,
});
