import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Skeleton from '../components/Skeleton/Skeleton';

export default {
    title: 'Skeleton',
    component: Skeleton,
    args: {
        options: {
            color: 'teal',
            type: 'circle',
            height: 'lg'
        }
    },
} as ComponentMeta<typeof Skeleton>

const CircleTemplate: ComponentStory<typeof Skeleton> = (args) => {
    return (
        <Skeleton 
            {...args} 
        />
    )
};

const ColTemplate: ComponentStory<typeof Skeleton> = (args) => {
    return (
        <Skeleton 
            {...args} 
        />
    )
};
export const ColumnSkeleton = ColTemplate.bind({});
export const CircleSkeleton = CircleTemplate.bind({});
