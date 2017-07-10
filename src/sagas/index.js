import {takeLatest} from 'redux-saga';
import {fork} from 'redux-saga/effects';
import {emailsFetchList} from './emails';


//main saga generator
export function* sagas() {
    yield [fork(takeLatest, 'EMAILS_FETCH_LIST', emailsFetchList)];
}
