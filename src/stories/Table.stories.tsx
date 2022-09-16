import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Table from '../components/Table/Table'

export default {
    title: 'Table',
    component: Table,
    args: {
        data: {
            tableHead: [
                { tableTitle: 'Aircraft' },
                { tableTitle: 'Country' },
                { tableTitle: 'Year of Introduction' },
            ],
            tableRowData: [
                {
                    aircraft: 'McDonnell Douglas F-15E Strike Eagle',
                    country: 'USA',
                    year: '1985',
                },
                {
                    aircraft: 'Lockheed Martin F-35 Lightning II',
                    country: 'USA',
                    year: '2006',
                },
                {
                    aircraft: 'IAI Eitan',
                    country: 'Israel',
                    year: '2004',
                },
            ],
        },
    },
} as ComponentMeta<typeof Table>

const Template: ComponentStory<typeof Table> = args => {
    return <Table {...args} />
}

export const TableDefault = Template.bind({})
