import {call, put} from 'redux-saga/effects';
import ApiItems from '../api/items';


export function* itemsFetchList(action) {
    const items = yield call(ApiItems.getList,[action.limit]);
    yield put({
        type: 'ITEM_FETCH_LIST_SUCCESS',
        items: items
    });
}