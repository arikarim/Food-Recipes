import { createStore, combineReducers } from 'redux';
import recipieReducer from './RecipiReducer';

const configureStore = () => {
  const store = createStore(
    combineReducers({
      foods: recipieReducer,
    }),
  );
  return store;
};

export default configureStore;
