import React from "react";
import Progress from "../Progress";
import renderer from 'react-test-renderer';

describe('<Progress /> unit tests', () => {
    it('Progress should render', () => {
        const component = renderer.create(
          <Progress
            data={{
                color: 'red',
                width: '10%',
                height: '15px',
                enableStripe: true,
                animateStripe: true,
            }}
          />,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
