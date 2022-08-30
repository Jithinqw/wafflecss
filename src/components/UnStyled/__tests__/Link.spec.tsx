import React from "react";
import UnStyledLink from "../Link";
import renderer from 'react-test-renderer';
import { render } from "@testing-library/react";
import 'jest-styled-components';

describe('<UnStyledLink /> unit tests', () => {
    it('Should render <UnStyledLink /> when calling', () => {
        const component = renderer.create(
          <UnStyledLink
            data={{
                displayText: 'This is a button'
            }}
          />,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});