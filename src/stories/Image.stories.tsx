import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Image from '../components/Basic/Image/Image'

export default {
    title: 'Image',
    component: Image,
    argTypes: {},
} as ComponentMeta<typeof Image>

const ImageDefaultTemplate: ComponentStory<typeof Image> = (args) => {
    const propArgs = {
        data: {
            imageSrc: 'https://bit.ly/dan-abramov',
        }
    }
    return (
        <Image 
            {...propArgs}
        />
    )
}

export const ImageDefault = ImageDefaultTemplate.bind({});

const ImageTemplate: ComponentStory<typeof Image> = (args) => {
    const propArgs = {
        data: {
            imageSrc: 'https://bit/dan-abramov',
            fallbackImageSrc: 'https://avatars.githubusercontent.com/u/20675707?s=400&u=55a84a1aa15319882892c57d6d7aef0d362c4c00&v=4'
        }
    }
    return (
        <Image 
            {...propArgs}
        />
    )
}

export const ImageWithFallback = ImageTemplate.bind({});
