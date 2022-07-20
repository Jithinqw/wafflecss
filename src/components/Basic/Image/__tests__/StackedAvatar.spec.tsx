import React from "react";
import StackedImage from "../StackedImage/StackedImage";
import renderer from 'react-test-renderer';

describe('Image unit tests', () => {
    it('changes the class when hovered', () => {
        const component = renderer.create(
          <StackedImage
            data={{
                imageData: [
                    {
                        imageSource: 'https://bit.ly/dan-abramov',
                        height: 60,
                        width: 60
                    },
                    {
                        imageSource: 'https://bit.ly/dan-abramov',
                        height: 60,
                        width: 60
                    },
                    {
                        imageSource: 'https://bit.ly/dan-abramov',
                        height: 60,
                        width: 60
                    },
                ],
            }}
          />,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
