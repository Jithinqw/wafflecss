import React from "react";
import PinInput from "../PinInput/PinInput";
import renderer from 'react-test-renderer';

describe('Announcement unit tests', () => {
    it('changes the class when hovered', () => {
        const component = renderer.create(
          <PinInput
            data={{
                value: '2'
            }}
          />,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
