import {useState, useEffect} from 'react';
import axios from 'axios';

const useResources = (resource) => {
    const [resources, setResources] = useState([])
    const get = async (list) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${list}`)
        setResources(response.data);
    };
    //The second argument in useEffect, the array decides if useEffect will be called a second time
    //UseEffect will always be called the first time
    //If there is no array, useEffect will get called all the time the state updates
    //The the array is empty, useEffect will be called the first time. 
    //the second time it sees that the value is the same, so it wont call it a second time
    //Empty array is the equivalent of componentDidMount
    //If we pass in the array with a constant value, it wont be called a second time, 
    //becuase it sees that the value in the array did not update
    //If value in array updates, useEffect will be called
    //If value in array is an object, it will be called a second time because two obects, even if they have the same thing insde it
    //are not the same, since they have different addresses in memory
    //Not allowed to call asyns functions directly from useEffect. i.e. we cannot take the get function from above and directly place 
    //it in the useEffect
    useEffect(() => {
        get(resource);
    }, [resource])

    return resources;
}

export default useResources;