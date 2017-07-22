import {call, put} from 'redux-saga/effects';
import ApiItems from '../api/items';


export function* itemsFetchList(action) {
    const items = yield call(ApiItems.getList,[action.limit]);
    yield put({
        type: 'ITEM_FETCH_LIST_SUCCESS',
        items: items
    });
}

export function* itemsEditList(action) {
    const items = yield call(ApiItems.editList,[action.values]);
    yield put({
        type: 'ITEM_EDIT_SUCCESS',
        items: items
    });
}

export function* itemsAddList(action) {
    const items = yield call(ApiItems.addList,[action.values]);
    yield put({
        type: 'ITEM_ADD_SUCCESS',
        items: items
    });
}