import {createStore,combineReducers} from 'redux';
import topics from './reducer/topics';
export default createStore(combineReducers({
    topics
}))