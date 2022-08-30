import React from 'react';
import renderer from 'react-test-renderer';
import { render } from "@testing-library/react";
import 'jest-styled-components';
import CloseButton from '../CloseButton/CloseButton';

describe('Unit test for <CloseButton />', () => {
    it('Should render <CloseButton /> on default values', () => {
        const component = renderer.create(
            <CloseButton
                width='23'
                height='23'
                color='black'
            />,
          );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
})