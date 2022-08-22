import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Image from '../components/Basic/Image/Image'

export default {
    title: 'Image',
    component: Image,
    args: {
        data: {
            imageSrc: 'https://bit.ly/dan-abramov',
        },
    },
} as ComponentMeta<typeof Image>

const ImageDefaultTemplate: ComponentStory<typeof Image> = args => {
    return <Image {...args} />
}

const ImageTemplate: ComponentStory<typeof Image> = args => {
    return (
        <Image
            data={{
                imageSrc: 'some random link',
                fallbackImageSrc:
                    'https://avatars.githubusercontent.com/u/20675707?s=400&u=55a84a1aa15319882892c57d6d7aef0d362c4c00&v=4',
            }}
        />
    )
}

export const ImageDefault = ImageDefaultTemplate.bind({})
export const ImageWithFallback = ImageTemplate.bind({})
