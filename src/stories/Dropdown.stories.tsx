import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Dropdown from '../components/Basic/Input/Dropdown/Dropdown';

export default {
    title: 'Dropdown',
    component: Dropdown,
    args: {
        data: {
            optionData: [
                {displayText: 'Apple', value: 'www.apple.com'},
                {displayText: 'Google', value: 'www.google.com'},
                {displayText: 'Amazon', value: 'www.amazon.in'},
                {displayText: 'Meta', value: 'www.fb.com'},
                {displayText: 'Airbnb', value: 'www.airbnb.io'}
            ]
        }
    },
} as ComponentMeta<typeof Dropdown>

const DropdownTemplate: ComponentStory<typeof Dropdown> = (args) => {
    return (
        <Dropdown 
            {...args} 
        />
    )
};
export const Default = DropdownTemplate.bind({});