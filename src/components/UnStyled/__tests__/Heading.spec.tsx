import React from "react";
import UnstyledHeading from "../Heading";
import renderer from 'react-test-renderer';
import { render } from "@testing-library/react";
import 'jest-styled-components';

describe('<UnstyledHeading /> unit tests', () => {
    it('Should render <UnstyledHeading /> when calling', () => {
        const component = renderer.create(
          <UnstyledHeading
            data={{
                headingText: 'This is a button'
            }}
            headingLevel={0}
          />,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});