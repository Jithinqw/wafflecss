import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Switch from '../components/Basic/Input/Switch/Switch'

export default {
    title: 'Switch',
    component: Switch,
    args: {
        options: {
            size: 'lg',
        },
    },
} as ComponentMeta<typeof Switch>

const Template: ComponentStory<typeof Switch> = args => {
    return <Switch {...args} />
}
export const SwitchPrimary = Template.bind({})
