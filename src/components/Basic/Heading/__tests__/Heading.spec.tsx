import React from "react";
import Heading from "../Heading";
import renderer from 'react-test-renderer';

describe('Button unit tests', () => {
    it('changes the class when hovered', () => {
        const component = renderer.create(
          <Heading
            data={{
                headingText: 'This is a button'
            }}
          />,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
