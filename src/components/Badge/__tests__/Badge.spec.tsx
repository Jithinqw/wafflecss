import React from "react";
import Badge from "../Badge";
import renderer from 'react-test-renderer';

describe('Badge unit tests', () => {
    it('changes the class when hovered', () => {
        const component = renderer.create(
          <Badge
            data={{
              displayText: 'This is stacked Alert with dark variant'  
            }}
          />,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
