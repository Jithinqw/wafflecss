import React from "react";
import CheckBox from "../CheckBox/Checkbox";
import renderer from 'react-test-renderer';

describe('Announcement unit tests', () => {
    it('changes the class when hovered', () => {
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
