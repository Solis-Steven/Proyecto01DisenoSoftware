import { 
    useContext, 
    createContext, 
    useEffect, 
    useState
 } from 'react'

import {
    GoogleAuthProvider,
    signInWithRedirect, 
    signOut,
    onAuthStateChanged
} from 'firebase/auth'

import { auth } from '../api'

const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
    const [ user, setUser ] = useState({});

    const googleSignIn = () => {
        // To consume what google provides us
        const provider = new GoogleAuthProvider();
        signInWithRedirect( auth, provider );
    }

    const logOut = () => {
        signOut( auth );
    }

    useEffect(() => {
        // To hear if the user has changed
        const unsubscribe = onAuthStateChanged( auth, currentUser => {
            setUser( currentUser );
        } );

        return () => {
            unsubscribe();
        }
    }, []);

    return(
        <AuthContext.Provider value={{ 
            googleSignIn,
            logOut,
            user
         }}>
            { children }
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext( AuthContext );
}