import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Switch from '../components/Basic/Input/Switch/Switch'

export default {
    title: 'Switch',
    component: Switch,
    argTypes: {},
} as ComponentMeta<typeof Switch>

const Template: ComponentStory<typeof Switch> = (args) => {
    return <Switch />
}
export const SwitchPrimary = Template.bind({})
