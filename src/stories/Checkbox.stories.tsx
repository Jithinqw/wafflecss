import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Checkbox from '../components/Basic/Input/CheckBox/Checkbox'
import { action } from '@storybook/addon-actions';

export default {
    title: 'Checkbox',
    component: Checkbox,
    args: {
        data: {
            displayText: 'Demo',
            value: 'demo',
        },
        options: {
            variant: 'sm',
        },
    },
} as ComponentMeta<typeof Checkbox>

const CheckboxTemplate: ComponentStory<typeof Checkbox> = (args) => {
    return <Checkbox {...args} />
}

const CheckboxTemplateWithLabel: ComponentStory<typeof Checkbox> = (args) => {
    return (
        <Checkbox {...args} options={{
            checkboxLabel: 'Demo'
        }}/>
    )
}

const CheckBoxClickTest: ComponentStory<typeof Checkbox> = (args) => {
    return (
        <Checkbox
            {...args}
            events={{
                onCheckboxChange: action('Checkbox action triggered'),
            }}
        />
    )
}

export const CheckboxDefault = CheckboxTemplate.bind({});
export const CheckboxWithLabel = CheckboxTemplateWithLabel.bind({})
export const CheckboxTest = CheckBoxClickTest.bind({});
