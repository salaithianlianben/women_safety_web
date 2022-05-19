import {all, fork} from 'redux-saga/effects';
import { watchAccessLogin,watchLogout,watchFetchAuthInfo,watchFetchAllUsers } from './authSaga';


export default function* rootSaga() {
    yield all([
      fork(watchAccessLogin),
      fork(watchLogout),
      fork(watchFetchAuthInfo),
      fork(watchFetchAllUsers),
    ]);
}