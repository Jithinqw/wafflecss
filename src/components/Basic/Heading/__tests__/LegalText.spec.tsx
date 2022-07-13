import React from "react";
import LegalText from "../LegalText/LegalText";
import renderer from 'react-test-renderer';

describe('Button unit tests', () => {
    it('changes the class when hovered', () => {
        const component = renderer.create(
          <LegalText
            data={{
                displayText: 'This is a button'
            }}
          />,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
