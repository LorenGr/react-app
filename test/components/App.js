import React from 'react';
import {createShallow} from 'material-ui/test-utils';
import assert from 'assert';

import {AppStructure} from '../../src/components/AppStructure';

describe("App component", () => {
    describe("render", () => {

        let shallow;

        before(() => {
            shallow = createShallow();
        });

        const props = {
            classes: {container: {}},
            location: {pathname: {}}
        };


        it("should render component", () => {
            const wrapper = shallow(<AppStructure {...props}/>);
            assert.equal(wrapper.find('.container').length, 1);
            assert.equal(wrapper.find('.toolbar').length, 1);
        });
    });
});