import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import StarRating from '../components/StarRating/StarRating';
import { action } from "@storybook/addon-actions";

export default {
    title: 'StarRating',
    component: StarRating,
    args: {
        maxStarNum: 5,
        size: 'sm',
        defaultStarSelection: 3
    },
} as ComponentMeta<typeof StarRating>

const StarRateTemplate: ComponentStory<typeof StarRating> = (args) => {
    return <StarRating {...args} />
};
export const StarRatingTemplate = StarRateTemplate.bind({});


const StarRatingEventTemplate: ComponentStory<typeof StarRating> = (args) => {
    return <StarRating {...args} onClick={
        action('User clicked on star rating')
    }/>
}

export const StarRatingEventTest = StarRatingEventTemplate.bind({});
