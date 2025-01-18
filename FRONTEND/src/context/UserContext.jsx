import React, { createContext, useContext, useState } from 'react'
export const UserDataContext = createContext();

const UserContext = ({children}) => {
    // Initialize user state with empty object
    const [user, setuser] = useState({
        email:'',
        fullname:{
            firstname:'',
            lastname:''
        }
    })
  return (
    <div>
        <UserDataContext.Provider value={{ user , setuser}} >
          {children}
        </UserDataContext.Provider>
    </div>
  )
}

export default UserContext
