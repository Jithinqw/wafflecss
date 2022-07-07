import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import StarRating from '../components/StarRating/StarRating';

export default {
    title: 'StarRating',
    component: StarRating,
    args: {
        maxStarNum: 5,
        size: 'sm'
    },
} as ComponentMeta<typeof StarRating>

const StarRateTemplate: ComponentStory<typeof StarRating> = (args) => {
    return (
        <StarRating 
            {...args} 
        />
    )
};
export const StarRatingTemplate = StarRateTemplate.bind({});
