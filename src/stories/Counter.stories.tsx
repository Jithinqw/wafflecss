import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Counter from '../components/Basic/Label/Counter/Counter';

export default {
    title: 'Counter',
    component: Counter,
    argTypes: {},
} as ComponentMeta<typeof Counter>

const CounterTemplate: ComponentStory<typeof Counter> = (args) => {
    const propArgs = {
        data: {
            displayText: '232'
        }
    }
    return (
        <Counter 
            {...propArgs} 
        />
    )
};
export const CounterDefault = CounterTemplate.bind({});

const CounterTemplateDark: ComponentStory<typeof Counter> = (args) => {
    const propArgs = {
        data: {
            displayText: '23234234234234234234'
        },
        options: {
            counterType: 'dark'
        }
    }
    return (
        <Counter 
            {...propArgs} 
        />
    )
};
export const CounterDark = CounterTemplateDark.bind({});