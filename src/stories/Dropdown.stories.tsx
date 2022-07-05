import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Dropdown from '../components/Basic/Input/Dropdown/Dropdown';

export default {
    title: 'Dropdown',
    component: Dropdown,
    args: {
        data: {
            optionData: [
                {displayText: 'Apple', value: 'Apple1'},
                {displayText: 'Google', value: 'Google2'},
                {displayText: 'Amazon', value: 'Amazon3'},
                {displayText: 'Meta', value: 'Meta4'},
                {displayText: 'Airbnb', value: 'Airbnb5'}
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