import React from 'react';
import {shallow} from 'enzyme';
import assert from 'assert';

import {ListItem} from '../../src/components/ListItem';

describe("ListItem component", () => {
    describe("render", () => {
        it("should render component", () => {

            //Mock the props
            const props = {
                item: {
                    id: 0
                }
            };

            const wrapper = shallow(<ListItem {...props} />);
            assert.equal(wrapper.find('.ItemContainer').length, 1);
            assert.equal(wrapper.find('Button').length, 2);
        });
    });
});