import React from "react";
import Avatar from "../Avatar/Avatar";
import renderer from 'react-test-renderer';

describe('Avatar Unit test', () => {
    it('Should render avatar', () => {
        const component = renderer.create(
        <Avatar 
            data={{
                imageSrc: 'http://t0.gstatic.com/images?q=tbn:ANd9GcQ9u48pu-6IB2FnnYl_H-15le_g8Dkt5d5RN-VWiWIl_-dyJdaa'
            }}
        />,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});