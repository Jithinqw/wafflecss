import React from "react";
import Announcement from "../Announcement";
import renderer from 'react-test-renderer';
import { render } from "@testing-library/react";

describe('<Announcement /> unit tests', () => {
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
        const { container } = render(
          <Announcement
            data={{
              displayNode: 'We are announcing a new feture.'
            }}
          />,
        )
        expect(container.textContent).toBe('We are announcing a new feture.x');
    });
});
