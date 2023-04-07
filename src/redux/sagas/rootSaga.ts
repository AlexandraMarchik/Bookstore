import {all} from 'redux-saga/effects'
import booksSaga from "src/redux/sagas/booksSaga";



export default function* rootSaga (){
yield all ([booksSaga()])
}