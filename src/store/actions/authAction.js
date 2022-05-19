import { POST_LOGIN,POST_LOGOUT,FETCH_AUTH_INFO,FETCH_ALL_USERS } from "./action-types";

const authAction = {
    handleLogout : () =>{
        // console.log("Logout")
        return {
            type:POST_LOGOUT,
        }
    },
    handleLogin : (authInfo) =>{
        return {
            type:POST_LOGIN,
            authInfo:authInfo,
        }
    },
    getAuthInfo:(uid) =>{
        return {
            type:FETCH_AUTH_INFO,
            uid:uid,
        }
    },
    fetchAllUsers: () => {
        return {
            type:FETCH_ALL_USERS,
        }
    }
}

export default authAction;