import React from "react";
import Backdrop from "../Backdrop";
import renderer from 'react-test-renderer';

describe('<Announcement /> unit tests', () => {
    it('changes the class when hovered', () => {
        const component = renderer.create(
          <Backdrop
            data={{
                isVisible: true,
                children: <div>Hey from demo</div>
            }}
          />,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
