import React from "react";
import UnstyledTextArea from "../TextArea";
import renderer from 'react-test-renderer';
import { render } from "@testing-library/react";
import 'jest-styled-components';

describe('<UnstyledTextArea /> unit tests', () => {
    it('Should render <UnstyledTextArea /> when calling', () => {
        const component = renderer.create(
          <UnstyledTextArea
            data={{
                value: 'This is a TextInput'
            }}
          />,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});