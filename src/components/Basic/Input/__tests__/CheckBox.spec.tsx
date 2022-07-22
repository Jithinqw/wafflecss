import React from "react";
import CheckBox from "../CheckBox/Checkbox";
import renderer from 'react-test-renderer';

describe('<CheckBox> unit tests', () => {
    it('Should render Checkbox when calling default values', () => {
        const component = renderer.create(
          <CheckBox
            data={{
                displayText: 'Demo',
                value: 'Demo'
            }}
            options={{
                variant: 'md'
            }}
          />,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
