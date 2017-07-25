import React from 'react';
import {createShallow} from 'material-ui/test-utils';
import assert from 'assert';

import {ListItem} from '../../src/components/ListItem';

describe("ListItem component", () => {
    describe("render", () => {

        let shallow;

        before(() => {
            shallow = createShallow();
        });

        //Mock the props
        const props = {
            item: {
                id: 0
            },
            classes : {
                root:{},photo:{},caption:{},
                contet : {},link:{},title:{}
            }
        };

        it("should render component", () => {
            const wrapper = shallow(<ListItem {...props} />);
            assert.equal(wrapper.find('.cardContainer').length, 1);
        });
    });
});