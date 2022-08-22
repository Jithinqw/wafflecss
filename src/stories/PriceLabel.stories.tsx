import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import PriceLabel from '../components/Basic/Label/PriceLabel/PriceLabel'

export default {
    title: 'PriceLabel',
    component: PriceLabel,
    args: {
        data: {
            currencySymbol: '₹',
            price: 234.3434,
            precision: 1,
            recurringLabel: '/yr.',
        },
        options: {
            isStrikethrough: false,
        },
    },
} as ComponentMeta<typeof PriceLabel>

const PriceLabelTemplate: ComponentStory<typeof PriceLabel> = args => {
    return <PriceLabel {...args} />
}

export const DefaultPriceLabel = PriceLabelTemplate.bind({})
