import { createStore, combineReducers } from 'redux';
import recipieReducer from './RecipiReducer';
import filtersReducer from './Filter';

const configureStore = () => {
  const store = createStore(
    combineReducers({
      foods: recipieReducer,
      filters: filtersReducer,
    }),
  );
  return store;
};

export default configureStore;
