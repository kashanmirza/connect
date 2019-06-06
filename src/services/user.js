import API from '../api';

export const userServices = {
    login,
    logout
}

function login(username,password){
    const request = {
        method: "Post",
        headers : {'Content-Type' : "application/json"},
        body : JSON.stringify({username, password})
    };

    return API.get("http://viacep.com.br/ws/74922800/json/")
        .then((user)=>{
        console.log("[Service.user] login request", user);
            localStorage.setItem('user', user);
            return user;
        })
        .catch((err)=>{
            console.log("[Service.user] Login Request Error ", err);
            return null
        });
}

function logout() {
    localStorage.removeItem('user');
}