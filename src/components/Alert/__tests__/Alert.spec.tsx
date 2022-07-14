import React from "react";
import Alert from "../Alert";
import renderer from 'react-test-renderer';

describe('Alert unit tests', () => {
    it('changes the class when hovered', () => {
        const component = renderer.create(
          <Alert
            data={{
              displayText: 'This is stacked Alert with dark variant'  
            }}
            options={{
                variants: 'dark'
            }}
          />,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
