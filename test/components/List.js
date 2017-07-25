import React from 'react';
import {shallow} from 'enzyme';
import assert from 'assert';

import {List} from '../../src/components/List';

describe("List component", () => {
    describe("render", () => {

        it("should render list", () => {
            //Mock the props
            const props = {
                page: 1,
                items: [
                    {
                        id: 0
                    }
                ]
            };
            const wrapper = shallow(<List {...props} />);
            assert.equal(wrapper.find('#items').length, 1);
        });

        it("should render progressbar", () => {
            //Mock the props
            const props = {
                page: 1,
                items: [],
                dispatch: () => {
                }
            };
            const wrapper = shallow(<List {...props} />);
            assert.equal(wrapper.find('.loader').length, 1);
        });
    });
});