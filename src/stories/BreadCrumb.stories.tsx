import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import BreadCrumb from '../components/BreadCrumb/BreadCrumb'
import { action } from '@storybook/addon-actions'

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
            seperator: '*',
        },
    },
} as ComponentMeta<typeof BreadCrumb>

const BreadCrumbTemplate: ComponentStory<typeof BreadCrumb> = (args) => {
    return <BreadCrumb {...args} />
}

const BreadCrumbTestClick: ComponentStory<typeof BreadCrumb> = (args) => {
    return (
        <BreadCrumb {...args}
        events={{
            onClick: action('User clicked on BreadCrumb')
        }}
    />)
}

export const DefaultBreadCrumb = BreadCrumbTemplate.bind({});
export const BreadCrumbClickTest = BreadCrumbTestClick.bind({});

