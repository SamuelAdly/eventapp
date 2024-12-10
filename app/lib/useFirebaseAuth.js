import {
    createUserWithEmailAndPassword as _createUserWithEmailAndPassword,
    onAuthStateChanged as _onAuthStateChanged,
    signInWithEmailAndPassword as _signInWithEmailAndPassword,
    signOut as _signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase";

const formatAuthUser = user => ({
    uid: user.uid,
    email: user.email,
});

export default function useFirebaseAuth() {
    const [authUser, setAuthUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const clear = () => {
        setAuthUser(null);
        setLoading(true);
    };

    const authStateChanged = async authState => {
        if (!authState) {
            setLoading(false);
            return;
        }

        setLoading(true);

        let formattedUser = formatAuthUser(authState);
        setAuthUser(formattedUser);
        setLoading(false);
    };

    const signInWithEmailAndPassword = (email, password) =>
        _signInWithEmailAndPassword(auth, email, password);

    const createUserWithEmailAndPassword = (email, password) =>
        _createUserWithEmailAndPassword(auth, email, password);

    const signOut = () => _signOut(auth).then(clear);

    const onAuthStateChanged = cb => {
        return _onAuthStateChanged(auth, cb);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(authStateChanged);
        return () => unsubscribe();
    }, []);

    return {
        authUser,
        loading,
        signInWithEmailAndPassword,
        createUserWithEmailAndPassword,
        signOut,
    };
}
