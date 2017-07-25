import React from 'react';
import {shallow} from 'enzyme';
import assert from 'assert';

import {ListDelete} from '../../src/components/ListDelete';

describe("ListDelete component", () => {
    describe("render", () => {
        it("should render component", () => {

            //Mock the props
            const props = {
                modal_delete: {
                    show: true,
                    id: 0,
                    name: ''
                }
            };
            const wrapper = shallow(<ListDelete {...props} />);
            assert.equal(wrapper.find('#listDeleteContainer').length, 1);
            assert.equal(wrapper.find('#cancelButton').length, 1);
            assert.equal(wrapper.find('#confirmButton').length, 1);
        });
    });
});