import {takeLatest} from 'redux-saga';
import {fork} from 'redux-saga/effects';
import {itemsFetchList} from './items';
import {itemsEditList} from './items';
import {itemsAddList} from './items';
import {itemsDeleteList} from './items';


//main saga generator
export function* sagas() {
    yield [fork(takeLatest, 'ITEM_FETCH_LIST', itemsFetchList)];
    yield [fork(takeLatest, 'ITEM_EDIT', itemsEditList)];
    yield [fork(takeLatest, 'ITEM_ADD', itemsAddList)];
    yield [fork(takeLatest, 'ITEM_DELETE', itemsDeleteList)];
}
