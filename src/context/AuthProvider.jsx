import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';
import useAxios from '../hooks/useAxios';
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const axiosInstance = useAxios();

    // Google Provider
    const googleProvider = new GoogleAuthProvider();

    // Create user with email and password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // update profile after account creation
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        });
    }

    // Login user
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Google sign in
    const singWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    // Log out user
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // Observe user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            if (currentUser?.email) {
                // jwt token generation
                axiosInstance.post('/login', { email: currentUser.email })
                    .then(res => {
                        console.log('login:', res.data);
                        setLoading(false);
                    });
            } else {
                // jwt token removal
                axiosInstance.post('/logout', {})
                    .then(res => {
                        console.log('logout:', res.data);
                        setLoading(false);
                    });
            };
        });
        return () => {
            return unsubscribe();
        };
    }, [axiosInstance]);

    const authInfo = {
        user,
        loading,
        setLoading,
        createUser,
        updateUserProfile,
        signInUser,
        singWithGoogle,
        logOut,
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;