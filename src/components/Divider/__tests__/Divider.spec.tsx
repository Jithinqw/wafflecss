import React from "react";
import Divider from "../Divider";
import renderer from 'react-test-renderer';
import 'jest-styled-components';

describe('<Divider /> unit tests', () => {
    it('Should render <Divider /> on calling the component', () => {
        const component = renderer.create(
          <Divider
          />,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});