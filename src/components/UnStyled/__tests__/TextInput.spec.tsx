import React from "react";
import UnstyledTextInput from "../TextInput";
import renderer from 'react-test-renderer';
import { render } from "@testing-library/react";
import 'jest-styled-components';

describe('<UnstyledTextInput /> unit tests', () => {
    it('Should render <UnstyledTextInput /> when calling', () => {
        const component = renderer.create(
          <UnstyledTextInput
            data={{
                value: 'This is a TextInput'
            }}
          />,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});