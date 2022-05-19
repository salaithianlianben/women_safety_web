import { FETCH_ALL_USERS, FETCH_ALL_USERS_FAIL, FETCH_ALL_USERS_SUCCESS, FETCH_AUTH_INFO, FETCH_AUTH_INFO_FAIL, FETCH_AUTH_INFO_SUCCESS, POST_LOGIN, POST_LOGOUT } from "../actions/action-types";
import { put, takeLatest } from 'redux-saga/effects';
import { db, fetchAllUserData, getUserInfo, logInWithEmailAndPassword, logout } from "../../config/firebase";
import { doc, collection, query, where, onSnapshot,getDoc } from "firebase/firestore";

function* accessLogin(action) {
    try {
        const result = yield logInWithEmailAndPassword(action.authInfo.email,action.authInfo.password);
        // console.log(result)
        yield put({
            type:FETCH_AUTH_INFO,
            uid:result.user.uid,
        });
    } catch (errors) {
        console.log(errors);
    }
}

export function* watchAccessLogin() {
    yield takeLatest(POST_LOGIN, accessLogin);
}

function* handleLogout(){
    try{
        console.log("hello")
    } catch(errors){
        console.log(errors)
    }
}

export function* watchLogout() {
    yield takeLatest(POST_LOGOUT, handleLogout);
}

function* fetchAuthInfo(action){
    try{
        let result = yield getUserInfo(action.uid)
        yield put({
            type:result.isSuccess == true ? FETCH_AUTH_INFO_SUCCESS : FETCH_AUTH_INFO_FAIL,
            data:result.user,
        });

    } catch(errors){
        console.log(errors)
    }
}

export function* watchFetchAuthInfo() {
    yield takeLatest(FETCH_AUTH_INFO, fetchAuthInfo);
}

function* fetchAllUsers(){
    try{
        let result = yield fetchAllUserData();
        yield put({
            type:result.isSuccess === true ? FETCH_ALL_USERS_SUCCESS : FETCH_ALL_USERS_FAIL,
            data: result.user,
        })
    } catch(errors){
        console.log(errors);
        yield put({
            type:FETCH_ALL_USERS_FAIL,
        })
    }
}

export function* watchFetchAllUsers() {
    yield takeLatest(FETCH_ALL_USERS, fetchAllUsers);
}