import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Toast from '../components/Toast/Toast';


export default {
    title: 'Toast',
    component: Toast,
    argTypes: {},
} as ComponentMeta<typeof Toast>

const Template: ComponentStory<typeof Toast> = (args) => {
    const propArgs = {
        data: {
            showToast: true,
            displayText: 'Available for qualifying applicants in the United States.'
        }
    }
    return (
        <Toast {...propArgs}/>
    )
};
export const Toastprimary = Template.bind({});