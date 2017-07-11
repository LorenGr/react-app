import React from 'react';
import {shallow} from 'enzyme';
import assert from 'assert';

import {EmailList} from '../../src/components/EmailList';

describe("EmailList component", () => {
    describe("render", () => {

        it("should render table", () => {
            //Mock the props
            const props = {
                page: 1,
                emails: [
                    {
                        id: 0
                    }
                ]
            };
            const wrapper = shallow(<EmailList {...props} />);
            assert.equal(wrapper.find('Table').length, 1);
            assert.equal(wrapper.find('Pagination').length, 1);
        });

        it("should render progressbar", () => {
            //Mock the props
            const props = {
                page: 1,
                emails: [],
                dispatch: () => {
                }
            };
            const wrapper = shallow(<EmailList {...props} />);
            assert.equal(wrapper.find('ProgressBar').length, 1);
        });
    });
});