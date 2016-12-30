import { combineReducers } from 'redux';
import PostReducer from './posts';

const rootReducer = combineReducers({
  posts: PostReducer
});

export default rootReducer;
