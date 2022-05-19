import { POST_LOGIN,FETCH_ALL_USERS,FETCH_ALL_USERS_FAIL,FETCH_ALL_USERS_SUCCESS,SUCCESS_LOGIN,POST_LOGOUT,FETCH_AUTH_INFO,FETCH_AUTH_INFO_FAIL,FETCH_AUTH_INFO_SUCCESS, } from "../actions/action-types";


const initialState = {
    authInfo: {},
    loading: false,
    all_users:[]
};

const authReducers = (state = initialState, action) => {
    switch(action.type) {
      case POST_LOGIN:
        // console.log("POST LOGIN")
        return {
          ...state,
          loading: true,
        };

      case POST_LOGOUT:
        return {
          ...state,
        }

      case FETCH_AUTH_INFO:
        return {
          ...state,
          loading:true,
        }

      case FETCH_AUTH_INFO_SUCCESS:
        return {
          ...state,
          authInfo:action.data,
          loading:false,
        }

      case FETCH_ALL_USERS:
        return {
          ...state,
          all_users:[],
          loading:true,
        }

      case FETCH_ALL_USERS_FAIL:
        return {
          ...state,
          loading:false,
        }

      case FETCH_ALL_USERS_SUCCESS:
        return {
          ...state,
          all_users:[ ...state.all_users, ...action.data ],
          loading:false,
        }

      case FETCH_AUTH_INFO_FAIL:
        return {
          ...state,
          loading:false,
        }

      default:
        return state;
    }
  }

export default authReducers;