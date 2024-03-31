import axios from "axios";


interface signupForm {
    firstname: string,
    lastname: string,
    email: string,
    password: string
}
export const signup = async (body: signupForm) => {

    console.log('inside signup request');

    const response = await axios({
        method: 'post',
        url: 'http://localhost:8888/user/signup',
        data: body
    });

    return response.data;
}


interface signinForm {
    email: string;
    password: string;
}

export const signin = async (body: signinForm) => {

    console.log('inside signin request');

    const response = await axios({
        method: 'post',
        url: 'http://localhost:8888/user/signin',
        data: body
    });

    return response.data;
}
