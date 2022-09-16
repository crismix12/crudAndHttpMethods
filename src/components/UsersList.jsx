import React from 'react';
import axios from 'axios'
const UsersList = ({users, selectUser, getUsers}) => {
    const deleteUser = (id) => {
        axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
            .then(() => getUsers())
    }
    return (
        <div>
            <br />
            <h1>Users List</h1>
            <br />
            <ul>
                {
                    users.map(user => (
                        <li key={user.id}>
                            <p>First Name: {user.first_name}</p>
                            <p>Last Name: {user.last_name}</p>
                            <p>Email: {user.email}</p>
                            <p>Birthday: {user.birthday}</p>
                            <button onClick={() => selectUser(user)}> 
                                Edit
                            </button>
                            <button onClick={() => deleteUser(user.id)}>
                                Delete
                            </button>
                            <br />
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default UsersList;