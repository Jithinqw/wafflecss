import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Checkbox from '../components/Basic/Input/CheckBox/Checkbox';

export default {
    title: 'Checkbox',
    component: Checkbox,
    args: {
        data: {
            displayText: 'Demo',
            value: 'demo'
        },
        options:{
            variant: 'sm'
        }
    },
} as ComponentMeta<typeof Checkbox>

const CheckboxTemplate: ComponentStory<typeof Checkbox> = (args) => {
    return (
        <Checkbox 
            {...args} 
        />
    )
};

export const CheckboxDefault = CheckboxTemplate.bind({});