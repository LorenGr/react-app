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
                invalid: true,
                submitting: false
            };

            const wrapper = shallow(<Edit {...props} />);
            assert.equal(wrapper.find('#deleteDialog').length, 1);
            assert.equal(wrapper.find('#editForm').length, 1);

        });
    });
});