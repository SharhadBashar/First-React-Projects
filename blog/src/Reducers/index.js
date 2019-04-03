import {combineReducers} from 'redux';
import postReducer from './PostReducer';
import userReducer from './UserReducer';

/*
    //Reducers cannot return undefined
    //Reducers, must not motate state. 
    //Instead of doing things normally, do the following
    //All of these creates a new object/ array/ whatever instead of updating existing ones
    const colors = ['red', 'green'];
    //add elements to array:
    [...colors, 'blue'] -> adds item to end of Array
    ['purple', ...colors] -> adds item to beg of Array
    //removing an item:
    colors.filter(color => color !== 'green') -> removes green
    //updating:
    colors.map(color => color === 'red' ? 'blue' : color)
    const profile = {name: 'sam'}
    //updating
    {...profile, name: 'alex'} -> updates sam to alex
    {name:'alex', ...profile} -> updates the object with name alex and replaces it with the name sam
    //Adding:
    {...profile, age: 30} -> adds 30 to the object
    //removing something:
    _.omit(profile, 'name')
*/

export default combineReducers({
    posts: postReducer,
    users: userReducer
});