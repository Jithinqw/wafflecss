import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Status from '../components/Status/Status';

export default {
    title: 'Status',
    component: Status,
    args: {
        options: {
            bgColor: 'purple',
            variants: 'rect',
        }
    },
} as ComponentMeta<typeof Status>

const StatusTemplate: ComponentStory<typeof Status> = (args) => {
    return (
        <Status
            {...args} 
        />
    )
};
export const StatusBlue = StatusTemplate.bind({});