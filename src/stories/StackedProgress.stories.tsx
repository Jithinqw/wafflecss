import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import StackedProgress from '../components/Progress/StackedProgress/StackedProgress'

export default {
    title: 'StackedProgress',
    component: StackedProgress,
    args: {
        data: [
            {
                width: 16.8,
                bgColor: 'pink',
            },
            {
                width: 26.7,
                bgColor: 'red',
            },
            {
                width: 13.7,
                bgColor: 'blue',
            },
            {
                width: 5.3,
                bgColor: 'teal',
            },
            {
                width: 21.7,
                bgColor: 'black',
            },
            {
                width: 15.7,
                bgColor: 'orange',
            },
        ],
    },
} as ComponentMeta<typeof StackedProgress>

const ProgressDefaultTemplate: ComponentStory<
    typeof StackedProgress
> = args => {
    return <StackedProgress {...args} />
}

export const ProgressDefault = ProgressDefaultTemplate.bind({})
