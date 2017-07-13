import React from 'react';
import {shallow} from 'enzyme';
import assert from 'assert';

import EditField from '../../src/components/EditField';

describe("EditField component", () => {
    describe("render", () => {
        it("should render component", () => {

            //Mock the props
            const props = {
                meta: {
                    touched: false
                },
                input: {}
            };

            const wrapper = shallow(<EditField {...props} />);
            assert.equal(wrapper.find('FormGroup').length, 1);
            assert.equal(wrapper.find('Col').length, 2);

            assert.equal(wrapper.find('FormGroup').prop('validationState'), null);
            assert.equal(wrapper.find('HelpBlock').children().length, 0);
        });

        it("should render component in error state", () => {

            const errorString = "Required";
            //Mock the props
            const props = {
                meta: {
                    touched: true,
                    error: errorString
                },
                input: {}
            };

            const wrapper = shallow(<EditField {...props} />);
            assert.equal(wrapper.find('FormGroup').length, 1);
            assert.equal(wrapper.find('Col').length, 2);
            assert.equal(wrapper.find('HelpBlock').children().text(), errorString);
        });
    });
});