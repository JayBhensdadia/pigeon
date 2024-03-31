import { atom } from "recoil";


export const signupState = atom({
    key: 'signupState',
    default: {
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    }
});