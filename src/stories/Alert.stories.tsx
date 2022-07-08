import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Alert from '../components/Alert/Alert';
import LegalText from "../components/Basic/Heading/LegalText/LegalText";
import { action } from "@storybook/addon-actions";
import { userEvent, waitFor, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

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
            variants: 'info',
            testId: 'Hey'
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

export const AlertIntraction = AlertTestTemplate.bind({});
export const AlertReactNode = AlertTemplate.bind({});
export const AlertEventTest = AlertTestTemplate.bind({});

AlertIntraction.play = async ({ args, canvasElement }) => {
    AlertTestTemplate.args = {

    }
    const canvas = within(canvasElement);
    const selectedEle = await canvas.findByText('Hey from Alert');
    const selectedDivEle = await canvas.getByTestId('Hey');
    // Check if text node is rendered
    console.log(args);
    await expect(selectedEle.textContent).toBe('Hey from Alert');
}