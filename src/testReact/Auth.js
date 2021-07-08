import {React,useState,useEffect, Children} from 'react'

export const AuthContext = React.createContext();
export const AuthProvider = ({children}) => {
    const [loading,setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {

    }, [])
}
