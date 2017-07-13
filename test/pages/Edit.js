import React from 'react';
import {shallow} from 'enzyme';
import assert from 'assert';
import {Edit} from '../../src/pages/Edit';

describe("Edit component", () => {
    describe("Render", () => {
        it("should render the add or edit email form", () => {
            const props = {
                initialValues: {
                    id: 0
                },
                handleSubmit: () => {
                },
                invalid : true,
                submitting: false
            };

            const wrapper = shallow(<Edit {...props} />);
            assert.equal(wrapper.find('PageHeader span').text(),'Create');

        });
    });
});