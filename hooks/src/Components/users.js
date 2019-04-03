import React from 'react';
import useResources from './UseResource';

const users = () => {
    const users = useResources('users');
    return (
        <div>
            Users
            <ul>{users.map((user) => {
                return <li key = {user.id}>{user.name}</li>
            })}</ul>
        </div>
    );

}

export default users;