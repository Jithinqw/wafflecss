import React from "react";
import Announcement from "../Announcement";
import renderer from 'react-test-renderer';

describe('Announcement unit tests', () => {
    it('changes the class when hovered', () => {
        const component = renderer.create(
          <Announcement
            data={{
                displayNode: 'This is a button'
            }}
          />,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
