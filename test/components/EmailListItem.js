import React from 'react';
import {shallow} from 'enzyme';
import assert from 'assert';

import {EmailListItem} from '../../src/components/EmailListItem';

describe("EmailListItem component", () => {
    describe("render", () => {
        it("should render component", () => {

            //Mock the props
            const props = {
                item: {
                    id: 0
                }
            };

            const wrapper = shallow(<EmailListItem {...props} />);
            assert.equal(wrapper.find('.ItemContainer').length, 1);
            assert.equal(wrapper.find('Button').length, 2);
        });
    });
});