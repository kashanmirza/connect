import { userServices } from '../../services/user';
import { userConstants } from '../../constant/actionTypes/user';
import { history } from '../../helpers/history'

export const userActions = {
    login,
    logout
};

function login(username,password){
    return dispatch => {
        dispatch(request(username));
        userServices.login(username,password)
            .then((user) => {
                dispatch(success(user));
                history.push('/serviceCatalog');
            })
            .catch((error)=>{
                dispatch(failure(error))
            })
    };

    function request(user){{ return { type: userConstants.LOGIN_REQUEST, payload: user }}}
    function success(user){{ return { type: userConstants.LOGIN_SUCCESS, payload: user }}}
    function failure(error){{ return { type: userConstants.LOGIN_FAILURE, payload: error }}}
}

function logout(){
    userServices.logout();
    return { type: userConstants.LOGOUT };
}