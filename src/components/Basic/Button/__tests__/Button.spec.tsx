import React from "react";
import Button from "../Button";
import renderer from 'react-test-renderer';

describe('Button unit tests', () => {
    it('changes the class when hovered', () => {
        const component = renderer.create(
          <Button
            data={{
                displayText: 'This is a button'
            }}
          />,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
