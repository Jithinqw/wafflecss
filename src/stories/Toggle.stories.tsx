import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Toggle from '../components/Toggle/Toggle'

export default {
    title: 'Toggle',
    component: Toggle,
    args: {
        data: {
            parentLabel: 'Show your Rights',
            children: {
                __html: '<div>You have the right to remain silent</div>',
            },
        },
    },
} as ComponentMeta<typeof Toggle>

const Template: ComponentStory<typeof Toggle> = (args) => {
    return <Toggle {...args} />
}

export const Toggleprimary = Template.bind({})
