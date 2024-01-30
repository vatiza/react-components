import React, { useEffect, useState } from 'react';
import UsersData from '../Users/UsersData';




const LoadData = () => {
    const [userData, setuserData] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setuserData(data));
    }, [])

    return (
        <div>
            <h1>All Users</h1>
            {
                userData.map(user=><UsersData 
                    key={user.id}
                    user={user}
                    
                    ></UsersData>)
            }

        </div>
    );
};

export default LoadData;