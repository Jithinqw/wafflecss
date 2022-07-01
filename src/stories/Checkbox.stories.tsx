import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Checkbox from '../components/Basic/Input/CheckBox/Checkbox';

export default {
    title: 'Checkbox',
    component: Checkbox,
    argTypes: {},
} as ComponentMeta<typeof Checkbox>

const CheckboxTemplate: ComponentStory<typeof Checkbox> = (args) => {
    const propArgs = {
        data: {
            displayText: 'Demo',
            value: 'demo'
        }
    }
    return (
        <Checkbox 
            {...propArgs} 
        />
    )
};
export const CheckboxDefault = CheckboxTemplate.bind({});