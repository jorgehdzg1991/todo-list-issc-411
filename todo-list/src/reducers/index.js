import { combineReducers } from 'redux';
import todosReducer from './todosReducer';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({
  todos: todosReducer,
  users: usersReducer
});

export default rootReducer;
