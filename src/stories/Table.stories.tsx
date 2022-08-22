import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Table from '../components/Table/Table'

export default {
    title: 'Table',
    component: Table,
    args: {
        data: {
            parentLabel: 'Show your Rights',
            children: {
                __html: '<div>You have the right to remain silent</div>',
            },
        },
    },
} as ComponentMeta<typeof Table>

const Template: ComponentStory<typeof Table> = args => {
    return <Table {...args} />
}

export const Toggleprimary = Template.bind({})
