import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PromotionRibbon from '../components/PromotionRibbon/PromotionRibbon';
import { action } from '@storybook/addon-actions';
import Heading from '../components/Basic/Heading/Heading'

export default {
    title: 'PromotionRibbon',
    component: PromotionRibbon,
    args: {
        data:{
            children: (
                <Heading 
                    data={{
                        headingText: 'Promotions'
                    }}
                    options={{
                        headingColor: 'white'
                    }}
                />
            )
        }
    },
} as ComponentMeta<typeof PromotionRibbon>

const PromotionRibbonTemplate: ComponentStory<typeof PromotionRibbon> = (args) => {
    return (
        <PromotionRibbon {...args} />
    )
}

export const StarRatingTemplate = PromotionRibbonTemplate.bind({});
