import React from 'react';
import {shallow} from 'enzyme';
import assert from 'assert';

import App from '../../src/components/App';

describe("App component", () => {
    describe("render", () => {
        it("should render component", () => {
            const wrapper = shallow(<App/>);
            assert.equal(wrapper.find('.container').length, 1);
            assert.equal(wrapper.find('AppToolbar').length, 1);
            assert.equal(wrapper.find('.data-grid').length, 1);
        });
    });
});