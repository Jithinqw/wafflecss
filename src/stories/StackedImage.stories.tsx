import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import StackedImage from '../components/Basic/Image/StackedImage/StackedImage'

export default {
    title: 'StackedImage',
    component: StackedImage,
    args: {
        data: {
            imageData: [
                {
                    imageSource: 'https://bit.ly/dan-abramov',
                    height: '60',
                    width: '60',
                },
                {
                    imageSource: 'https://bit.ly/dan-abramov',
                    height: '60',
                    width: '60',
                },
                {
                    imageSource: 'https://bit.ly/dan-abramov',
                    height: '60',
                    width: '60',
                },
                {
                    imageSource: 'https://bit.ly/dan-abramov',
                    height: '60',
                    width: '60',
                },
            ],
        },
        options: {
            wiggleAnimation: true,
        },
    },
} as ComponentMeta<typeof StackedImage>

const ImageDefaultTemplate: ComponentStory<typeof StackedImage> = args => {
    return <StackedImage {...args} />
}

export const ImageDefault = ImageDefaultTemplate.bind({})
