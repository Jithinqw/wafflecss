import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Label from '../components/Basic/Label/Label';

export default {
    title: 'Label',
    component: Label,
    args: {
        data:{
            displayText: 'Demo Label'
        },
        options: {
            size: 'lg'
        }
    }
} as ComponentMeta<typeof Label>

const LabelTemplate: ComponentStory<typeof Label> = (args) => {
    return (
        <Label 
            {...args}
        />
    )
}

const LabelTemplateTest: ComponentStory<typeof Label> = (args) => {
    return (
        <Label 
            {...args}
            options={{
                fontSize: '23px'
            }}
        />
    )
}

export const DefaultLabel = LabelTemplate.bind({});
export const LabelActionTest = LabelTemplateTest.bind({});
