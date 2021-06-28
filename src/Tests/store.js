
import { createStore, combineReducers } from 'redux';
import recipieReducer from '../Reducers/RecipiReducer';
import filtersReducer from '../Reducers/Filter';

const createTestStore = () => {
  const store = createStore(
    combineReducers({
      foods: recipieReducer,
      filters: filtersReducer,
    }),
  );
  return store;
};

export default createTestStore;