import React from "react";
import Image from "../Image";
import renderer from 'react-test-renderer';
import 'jest-styled-components';

describe('<Image /> unit tests', () => {
    it('Should render image if called', () => {
        const component = renderer.create(
          <Image
            data={{
                imageSrc: 'http://t0.gstatic.com/images?q=tbn:ANd9GcQ9u48pu-6IB2FnnYl_H-15le_g8Dkt5d5RN-VWiWIl_-dyJdaa'
            }}
          />,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
