import React from "react";
import Switch from "../Switch/Switch";
import renderer from 'react-test-renderer';

describe('Announcement unit tests', () => {
    it('changes the class when hovered', () => {
        const component = renderer.create(
          <Switch
          />,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
