import React, { useContext } from 'react'

import { UserContext } from './context/UserContext';

const Card = () => {

    const user = useContext(UserContext);
   
  return (
    <div style={styles.box}>


        <h2>User List</h2>
        {user.map((user)=>(
            <div key= {user.id}>
                <p>First Name: {user.firstName}</p>
                <p>Last Name: {user.lastName}</p>
                
            </div>
        ))}
        



    </div>
  )
}

const styles= {
    box:{
        border: '2px solid black',
        padding: '20px',
        margin: '20px',
        textAlign: 'center',
        
    }
}

export default Card