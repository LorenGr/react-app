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
            assert.equal(wrapper.find('Modal').length, 1);
            assert.equal(wrapper.find('Button').length, 2);
        });
    });
});