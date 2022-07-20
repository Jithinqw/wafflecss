import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import BreadCrumb from '../components/BreadCrumb/BreadCrumb'

export default {
    title: 'BreadCrumb',
    component: BreadCrumb,
    args: {
        data: [
            { displayText: 'Home' },
            { displayText: 'Profile' },
            { displayText: 'Update Password' },
            { displayText: 'Upload Photo' },
        ],
        options: {
            color: 'red',
            seperator: '*'
        }
    },
} as ComponentMeta<typeof BreadCrumb>

const BreadCrumbTemplate: ComponentStory<typeof BreadCrumb> = (args) => {
    return <BreadCrumb {...args} />
}

export const DefaultBreadCrumb = BreadCrumbTemplate.bind({})
