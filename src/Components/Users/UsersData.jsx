import React from 'react';
import './UsersData.css';
import { addToSession, addtoDB } from '../Utilities/fakedb';

const UsersData = (props) => {
    const { id, name, balance } = props.user;

    const addTocart = (id) => {
        addtoDB(name, balance)

    }
    const addtoSession = (id) => {
        addToSession(id, balance);

    }
    return (
        <div className='userInfo'>
            <h2>Name:{name}</h2>
            <h5>Balence:{balance}</h5>
            <p>Id:{id}</p>
            <button onClick={() => addTocart(id)}>Add to Localstorage </button>
            <button onClick={() => addtoSession(id)}>Add to Sessionstorage </button>



        </div>
    );
};

export default UsersData;