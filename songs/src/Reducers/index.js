import {combineReducers} from 'redux';

//step 2 create the reducers
const songsReducer = () => {
    return [
        {title: 'aaaaaaaaaaa', duration: '4:05'},
        {title: 'bbbbbbbbbbb', duration: '1:05'},
        {title: 'ccccccccccc', duration: '2:15'},
        {title: 'ddddddddddd', duration: '5:55'},
        {title: 'eeeeeeeeeee', duration: '3:23'},
    ];
};

const selectedSong = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }
    return selectedSong;
};

//step 3: Assigns the above reduers to an object like thing
export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSong
});