import React from 'react';
import {shallow} from 'enzyme';
import assert from 'assert';

import AppToolbar from '../../src/components/AppToolbar';

describe("AppToolbar component", () => {
    describe("render", () => {
        it("should render component", () => {
            const wrapper = shallow(<AppToolbar/>);
            assert.equal(wrapper.find('.AppToolbarContainer').length, 1);
            assert.equal(wrapper.find('Link').length, 2);
        });
    });
});