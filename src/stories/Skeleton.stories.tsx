import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Skeleton from '../components/Skeleton/Skeleton';

export default {
    title: 'Skeleton',
    component: Skeleton,
    argTypes: {},
} as ComponentMeta<typeof Skeleton>

const CircleTemplate: ComponentStory<typeof Skeleton> = (args) => {
    const propArgs = {
        options: {
            color: 'teal',
            type: 'circle',
            height: 'lg'
        }
    }
    return (
        <Skeleton 
            {...propArgs} 
        />
    )
};
export const CircleSkeleton = CircleTemplate.bind({});

const ColTemplate: ComponentStory<typeof Skeleton> = (args) => {
    const propArgs = {
        options: {
            color: 'red',
            type: 'col',
            height: 'lg',
            width: 'lg'
        }
    }
    return (
        <Skeleton 
            {...propArgs} 
        />
    )
};
export const ColumnSkeleton = ColTemplate.bind({});