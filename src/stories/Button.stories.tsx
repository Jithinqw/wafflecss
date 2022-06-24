import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '../components/Button/Button';

export default {
    title: 'Button',
    component: Button,
    argTypes: {
        data: {
            displayText: 'Hey Button',
        }
    },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => {
    const propArgs = {
        data: {
            displayText: 'This is a Extra Small text',
        },
        options: {
            variants: 'default'
        }
    }
    return (
        <Button {...propArgs}/>
    )
}
export const DefaultButton = Template.bind({});

const DangerButtonTempl: ComponentStory<typeof Button> = (args) => {
    const propArgs = {
        data: {
            displayText: 'This is a Extra Small text',
        },
        options: {
            variants: 'danger'
        }
    }
    return (
        <Button {...propArgs}/>
    )
}
export const DangerButton = DangerButtonTempl.bind({});

const OutlineButtonTempl: ComponentStory<typeof Button> = (args) => {
    const propArgs = {
        data: {
            displayText: 'This is a Extra Small text',
        },
        options: {
            variants: 'outline'
        }
    }
    return (
        <Button {...propArgs}/>
    )
}
export const OutlineButton = OutlineButtonTempl.bind({});
