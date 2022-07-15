import React from "react";
import TextInput from "../TextInput/TextInput";
import renderer from 'react-test-renderer';

describe('TextInput unit tests', () => {
    it('changes the class when hovered', () => {
        const component = renderer.create(
          <TextInput
            data={{
                value: '',
            }}
          />,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
