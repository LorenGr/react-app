import {call, put} from "redux-saga/effects";
import assert from "assert";
import {itemsFetchList} from "../../src/sagas/items";
import ApiEmails from "../../src/api/items";

describe('Emails saga', () => {
    describe('Emails Fetch List', () => {
        const generator = itemsFetchList();

        it('should return the ApiItems.getList call', () => {
            assert.deepEqual(generator.next().value, call(ApiEmails.getList));
        });

        it('should return action', () => {
            assert.deepEqual(generator.next().value, put({type: 'ITEM_FETCH_LIST_SUCCESS', items: undefined}));
        });

        it('should be finished', () => {
            assert.equal(generator.next().done, true);
        });
    });


});