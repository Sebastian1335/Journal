import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../store";
import { FirebaseAuth } from "../firebase/config";
import { startLoadingNotes } from "../store/journal";

export const useCheckAuth = () => {
    const {status} = useSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        onAuthStateChanged(FirebaseAuth, async (user) => {
            if (!user) return dispatch(logout());
            const {uid, email, displayName, photoURL} = user
            dispatch(login({uid, email, displayName, photoURL}))
            dispatch(startLoadingNotes()) // ! En el proceso en el cual se checkea si el usuario esta autenticado se debe cargar la información del usuario
        })
    }, [])

    return status
    ;
}
