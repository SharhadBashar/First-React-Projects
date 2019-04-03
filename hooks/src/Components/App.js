import React, {useState} from 'react';
import Resource from './Resource';
import Users from './users';

const App = () => {
    //Array destructering
    //useState returns an array
    //Take the first item from that array and set it to list
    //Take the second item in the array and save it to setList
    //Firt thing contains the present value of state
    //Second thing contains a fucntion to call when we want to update state

    const [list, setList] = useState('Posts')
    return (
        <div>
            <Users/>
            <div>
                <button onClick = {() => setList('Posts')}>
                    Posts
                </button>
                <button onClick = {() => setList('Todos')}>
                    Todos
                </button>
            </div>
            <Resource list = {list}/>
        </div>
    );
    
};

export default App;
