import React from 'react';
import useResources from './UseResource';

const Resource = ({list}) => {
    const lists = useResources(list);
    return (
        <div>
            {list}
            <ul>{lists.map((list) => {
                return <li key = {list.id}>{list.title}</li>
            })}</ul>
        </div>
    );
    
}

export default Resource;