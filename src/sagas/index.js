import {takeLatest} from 'redux-saga';
import {fork} from 'redux-saga/effects';
import {itemsFetchList} from './items';


//main saga generator
export function* sagas() {
    yield [fork(takeLatest, 'ITEM_FETCH_LIST', itemsFetchList)];
}
