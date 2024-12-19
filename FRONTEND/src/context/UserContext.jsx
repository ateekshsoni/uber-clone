import React, { createContext, useState } from 'react'
export const UserDataContext = createContext();

const UserContext = ({children}) => {
    const [user, setuser] = useState({
        email:'',
        fullname:{
            firstname:'',
            lastname:''
        }
    })
  return (
    <div>
        <UserDataContext.Provider >
          {children}
        </UserDataContext.Provider>
    </div>
  )
}

export default UserContext
