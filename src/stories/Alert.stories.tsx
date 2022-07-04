import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Alert from '../components/Alert/Alert';
import LegalText from "../components/Basic/Heading/LegalText/LegalText";

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

export const AlertReactNode = AlertTemplate.bind({});