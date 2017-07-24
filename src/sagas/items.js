import {call, put} from 'redux-saga/effects';
import ApiItems from '../api/items';
import {goBack} from 'react-router-redux';

export function* itemsFetchList(action) {
    const items = yield call(ApiItems.getList, [action.limit]);
    yield put({
        type: 'ITEM_FETCH_LIST_SUCCESS',
        items: items
    });
}

export function* itemsEditList(action) {
    const items = yield call(ApiItems.editList, [action.values]);
    yield put({
        type: 'ITEM_EDIT_SUCCESS',
        items: items
    });
}

export function* itemsAddList(action) {
    const items = yield call(ApiItems.addList, [action.values]);
    yield put({
        type: 'ITEM_ADD_SUCCESS',
        items: items
    });
}

export function* itemsDeleteList(action) {

    const items = yield call(ApiItems.deleteList, [action.id]);

    yield put({
        type: 'ITEM_DELETE_SUCCESS',
        items: items
    });
    yield put({
        type: 'ITEM_DELETE_MODAL_HIDE',
    });
    yield put(goBack());
}