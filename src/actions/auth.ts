import { firebase, googleAuthProvider } from '../firebase/firebase';

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

export const login = (uid: string) => ({
    type: LOGIN,
    uid
});

export const logout = () => ({
    type: LOGOUT
});

export const startLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    };
};

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    }
}