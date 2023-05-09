import jwt_decode from 'jwt-decode';

const verifyAuth = () => {
    // get the token from local storage
    const token = localStorage.getItem('token');
    if (!token) {
        return false;
    } else if (token !== "") {
        // decode
        const decodedToken : any = jwt_decode(token);
        if (decodedToken.exp < Date.now() / 1000) {
            return false;
        } else {
            return true;
        }
    } else {
        return false;
    }
}

export {verifyAuth};