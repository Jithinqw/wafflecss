import React from "react";
import Dropdown from "../Dropdown/Dropdown";
import renderer from 'react-test-renderer';

describe('Announcement unit tests', () => {
    it('changes the class when hovered', () => {
        const component = renderer.create(
          <Dropdown
            data={{
                optionData: [
                    { displayText: 'Apple', value: 'www.apple.com' },
                    { displayText: 'Google', value: 'www.google.com' },
                    { displayText: 'Amazon', value: 'www.amazon.in' },
                    { displayText: 'Meta', value: 'www.fb.com' },
                    { displayText: 'Airbnb', value: 'www.airbnb.io' },
                ],
            }}
          />,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
