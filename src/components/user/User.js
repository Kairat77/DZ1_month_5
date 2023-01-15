import { useState } from "react";

export default function User ({userInfo}) {
    const [user, setUser] = useState({})

    function getUser(){
        fetch(`https://jsonplaceholder.typicode.com/users/${userInfo.id}`)
        .then(response => response.json())
        .then(data => setUser(data));
    }

    

    return(
        <div>
            <h3>{userInfo.name}</h3>
            <button onClick={getUser} value={userInfo.id}>подробнее</button>
            {
                user && (
                    <div>
                        <p> username: {user.username}</p>
                        <p> email: {user.email}</p>
                        <p> city: {user?.address?.city}</p>
                    </div>
                )
            }
            <p>--------------------------</p>
        </div>
    )
}