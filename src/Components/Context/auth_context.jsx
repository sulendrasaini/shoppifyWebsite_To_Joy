import { createContext, useState } from "react"


export const authContext = createContext(null)

const AuthProvider = ({children})=>{
 
    const [users, setUsers] = useState([])
    const [currentUser, setCurrentUser] = useState(null)



    return(
        <authContext.Provider value={{users,setUsers, currentUser, setCurrentUser}}>
            {children}
        </authContext.Provider>
    )
};

export default AuthProvider;