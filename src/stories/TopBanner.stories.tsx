import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import TopBanner from '../components/Promotions/TopBanner/TopBanner'

export default {
    title: 'TopBanner',
    component: TopBanner,
    args: {
        data: {
            displayText: 'Here is the new feature...',
        },
        options: {
            bannerType: 'info',
        },
    },
} as ComponentMeta<typeof TopBanner>

const TopBannerTemplate: ComponentStory<typeof TopBanner> = args => {
    return <TopBanner {...args} />
}

export const Toggleprimary = TopBannerTemplate.bind({})
