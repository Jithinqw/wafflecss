import React from "react";
import TextArea from "../TextArea/TextArea";
import renderer from 'react-test-renderer';

describe('TextArea unit tests', () => {
    it('changes the class when hovered', () => {
        const component = renderer.create(
          <TextArea
            data={{
                value: '',
                placeholderText: 'demo'
            }}
            options={{
                isReadonly: true
            }}
          />,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
