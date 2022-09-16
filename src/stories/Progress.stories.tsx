import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Progress from '../components/Progress/Progress'

export default {
    title: 'Progress',
    component: Progress,
    argTypes:{
        data: {
            color: {
                name: 'color',
                type: { name: 'string', required: true},
                defaultValue: 'red',
            }
        },
        events: {
            onClick: Function
        }
    },
    args: {
        data: {
            color: 'red',
            width: '10%',
            height: '15px',
            enableStripe: true,
            animateStripe: true,
        },
    },
} as ComponentMeta<typeof Progress>

const ProgressTemplate: ComponentStory<typeof Progress> = args => {
    return <Progress {...args} />
}
export const DefaultProgressBar = ProgressTemplate.bind({})
