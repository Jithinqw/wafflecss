import React from "react";
import Loader from "../Loader";
import renderer from 'react-test-renderer';
import 'jest-styled-components';

describe('<Loader /> unit tests', () => {
    it('Should render loader if called', () => {
        const component = renderer.create(
          <Loader />,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
