import { userServices } from '../../services/user';
import { userConstants } from '../../constant/actionTypes/user';
import history  from '../../helpers/history'



export function login(username,password){
    return dispatch => {
        dispatch(request(username));
        userServices.login(username,password)
            .then((user) => {
                console.log("[User Actions] Login Success ", user);
                dispatch(success(user));
                history.push('/serviceCatalog');
            })
            .catch((error)=>{
                console.log("[User Actions] Login Error ", error);
                dispatch(failure(error))
            })
    };

    function request(user){{ return { type: userConstants.LOGIN_REQUEST, payload: user }}}
    function success(user){{ return { type: userConstants.LOGIN_SUCCESS, payload: user }}}
    function failure(error){{ return { type: userConstants.LOGIN_FAILURE, payload: error }}}
}

export function logout(){
    userServices.logout();
    console.log("[User Actions] Logout ");
    return { type: userConstants.LOGOUT };
}