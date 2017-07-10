import {call, put} from 'redux-saga/effects';
import ApiEmails from '../api/emails';


export function* emailsFetchList(action) {
    const emails = yield call(ApiEmails.getList);
    yield put({
        type: 'EMAILS_FETCH_LIST_SUCCESS',
        emails: emails
    })
}