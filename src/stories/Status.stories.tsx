import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Status from '../components/Status/Status';

export default {
    title: 'Status',
    component: Status,
    argTypes: {},
} as ComponentMeta<typeof Status>

const StatusTemplate: ComponentStory<typeof Status> = (args) => {
    const propArgs = {
        options: {
            bgColor: 'teal'
        }
    }
    return (
        <Status
            {...propArgs} 
        />
    )
};
export const StatusBlue = StatusTemplate.bind({});