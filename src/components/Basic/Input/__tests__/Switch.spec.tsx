import React from "react";
import Switch from "../Switch/Switch";
import renderer from 'react-test-renderer';

describe('<Switch /> unit tests', () => {
    it('Should render Switch component if called by default values', () => {
        const component = renderer.create(
          <Switch
          />,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
