import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Drawer from '../components/Drawer/Drawer'
import { action } from '@storybook/addon-actions'

export default {
    title: 'Drawer',
    component: Drawer,
    args: {
        data: {
            isVisible: true,
            children: <h2>dsfsdfsdf</h2>
        },
    },
} as ComponentMeta<typeof Drawer>

const DrawerTemplate: ComponentStory<typeof Drawer> = (args) => {
    return <Drawer {...args} />
}

export const Default = DrawerTemplate.bind({})
