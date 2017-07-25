import {call, put} from "redux-saga/effects";
import assert from "assert";
//import {itemsFetchList} from "../../src/sagas/items";
import sinon from 'sinon';
//import ApiItems from "../../src/api/items";

describe('Items saga', () => {
    describe('Items Fetch List', () => {

        // const generator = itemsFetchList({limit: 100});

        xit('should return the ApiItems.getList call', () => {
            assert.deepEqual(generator.next().value, call(ApiItems.getList, [100]));
        });

        xit('should return action', () => {
            assert.deepEqual(generator.next().value, put({type: 'ITEM_FETCH_LIST_SUCCESS', items: undefined}));
        });

        xit('should be finished', () => {
            assert.equal(generator.next().done, true);
        });
    });


});