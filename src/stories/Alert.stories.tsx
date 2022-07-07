import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Alert from '../components/Alert/Alert';
import LegalText from "../components/Basic/Heading/LegalText/LegalText";
import { action } from "@storybook/addon-actions";

export default {
    title: 'Alert',
    component: Alert,
    args: {
        data: {
            displayText: (
                <LegalText 
                    data={{
                        displayText: 'Hey from Alert'
                    }}
                />
            )
        },
        options: {
            variants: 'info'
        },
        events: {
            onBodyClick: Function.prototype
        }
    },
} as ComponentMeta<typeof Alert>

const AlertTemplate: ComponentStory<typeof Alert> = (args) => {
    return (
        <Alert 
            {...args}
        />
    )
}

const AlertTestTemplate: ComponentStory<typeof Alert> = (args) => {
    return (
        <Alert 
            {...args}
            events={{
                onBodyClick: action('Alert body clicked')
            }}
        />
    )
}

export const AlertReactNode = AlertTemplate.bind({});
export const AlertEventTest = AlertTestTemplate.bind({});
