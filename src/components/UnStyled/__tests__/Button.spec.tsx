import React from "react";
import UnstyledButton from "../Button";
import renderer from 'react-test-renderer';
import { render } from "@testing-library/react";
import 'jest-styled-components';

describe('<UnstyledButton /> unit tests', () => {
    it('Should render <UnstyledButton /> when calling', () => {
        const component = renderer.create(
          <UnstyledButton
            data={{
                displayText: 'This is a button'
            }}
          />,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
