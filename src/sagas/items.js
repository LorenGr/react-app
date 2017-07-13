import {call, put} from 'redux-saga/effects';
import ApiItems from '../api/items';


export function* itemsFetchList(action) {
    const items = yield call(ApiItems.getList);
    yield put({
        type: 'ITEM_FETCH_LIST_SUCCESS',
        items: items
    })
}