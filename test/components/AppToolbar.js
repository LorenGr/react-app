import React from 'react';
import {createShallow} from 'material-ui/test-utils';
import assert from 'assert';

import {AppToolbar} from '../../src/components/AppToolbar';

describe("AppToolbar component", () => {
    describe("render", () => {

        let shallow;

        before(() => {
            shallow = createShallow();
        });

        const props = {
            classes: {root: {}, bar: {}, flex: {}}
        }

        it("should render component", () => {
            const wrapper = shallow(<AppToolbar {...props}/>);
            assert.equal(wrapper.find('Link').length, 1);
        });
    });
});