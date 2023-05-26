import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [reload, setReload] = useState(false);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const profileUpdate = (name, photo, createdUser) => {
        return updateProfile(createdUser, {
            displayName: name, photoURL: photo,

        })
    }
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const handleGoogleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }
    const handleGithubSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider)
    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            // console.log("Logged in observer......", loggedUser);
            setUser(loggedUser)
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    }, []);

    
    useEffect(() => {
        const connection = onAuthStateChanged(auth, (user) => {
            setLoading(false);
            setUser(user);
        });
        return () => {
            return connection();
        };
    }, [reload]);


    const authInfo = {
        user,
        loading,
        reload,
        createUser,
        profileUpdate,
        signIn,
        handleGoogleSignIn,
        handleGithubSignIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;