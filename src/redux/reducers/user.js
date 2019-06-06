import { userConstants } from '../../constant/actionTypes/user';

let user = localStorage.getItem('user');
const initialState = user ? { loggedIn : true, user } : {};

export default (state = initialState ,action) => {
    switch (action.type){
        case userConstants.LOGIN_REQUEST:
            return {
                loggedIn : true,
                user: action.payload
            };
        case userConstants.LOGIN_SUCCESS:
            return {
                loggedIn : true,
                user: action.payload
            };
        case userConstants.LOGIN_FAILURE:
            return {
                loggedIn : false,
                error: action.error
            };
        case userConstants.LOGOUT:
            return {};
        default:
            return state;
    }
}