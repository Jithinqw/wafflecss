import React from "react";
import StackedProgress from "../StackedProgress/StackedProgress";
import renderer from 'react-test-renderer';

describe('<StackedProgress /> unit tests', () => {
    it('StackedProgress should render', () => {
        const component = renderer.create(
          <StackedProgress
            data={
                [{
                    width: 50.0,
                    bgColor: 'pink'
                },
                {
                    width: 50.0,
                    bgColor: 'red',
                }]
            }
          />,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
