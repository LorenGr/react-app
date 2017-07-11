import React from 'react';
import {shallow} from  'enzyme';
import assert from 'assert';

import Home from '../../src/pages/Home';

describe("Home component", () => {
    describe("Render", () => {
        const wrapper = shallow(<Home/>);
        assert.equal(wrapper.find('.container').length, 1);
    });
});