import React from "react";
import Avatar from "../Avatar/Avatar";
import renderer from 'react-test-renderer';
import { render } from "@testing-library/react";
import 'jest-styled-components';

describe('<Avatar /> Unit test', () => {
    it('Should render avatar when called', () => {
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

describe('<Avatar /> Unit test for additional styles', () => {
    it('Should render image with custom width', () => {
        const { container } = render(
            <Avatar
                data={{
                    imageSrc: 'http://t0.gstatic.com/images?q=tbn:ANd9GcQ9u48pu-6IB2FnnYl_H-15le_g8Dkt5d5RN-VWiWIl_-dyJdaa',
                    width: '100'
                }}
            />,
        )
        expect(container.firstChild).toHaveStyleRule('width', '100');
    })

    it('Should render image with custom height', () => {
        const { container } = render(
            <Avatar
                data={{
                    imageSrc: 'http://t0.gstatic.com/images?q=tbn:ANd9GcQ9u48pu-6IB2FnnYl_H-15le_g8Dkt5d5RN-VWiWIl_-dyJdaa',
                    height: '100'
                }}
            />,
        )
        expect(container.firstChild).toHaveStyleRule('height', '100');
    });
})