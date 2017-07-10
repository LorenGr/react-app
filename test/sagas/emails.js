import {call, put} from "redux-saga/effects";
import assert from "assert";
import {emailsFetchList} from "../../src/sagas/emails";
import ApiEmails from "../../src/api/emails";

describe('Emails saga', () => {
    describe('Emails Fetch List', () => {
        const generator = emailsFetchList();

        it('should return the ApiEmails.getList call', () => {
            assert.deepEqual(generator.next().value, call(ApiEmails.getList));
        });

        it('should return action', () => {
            assert.deepEqual(generator.next().value, put({type: 'EMAILS_FETCH_LIST_SUCCESS', emails: undefined}));
        });

        it('should be finished', () => {
            assert.equal(generator.next().done, true);
        });
    });


});