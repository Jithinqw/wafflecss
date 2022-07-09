import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Toast from '../components/Toast/Toast';
import LegalText from '../components/Basic/Heading/LegalText/LegalText';


export default {
    title: 'Toast',
    component: Toast,
    args: {
        data: {
            showToast: true,
            displayText: 'Available for qualifying applicants in the United States.',
            toastHeadNode: (
                <LegalText 
                    data={{
                        displayText: 'Now you can get 16GB of high-speed data every month when you prepay $300 for 12 months of service',
                    }}
                    options={{
                        legalTextSize: 'md'
                    }}
                />
            ),
            toastHeadTextNode: (
                <LegalText 
                    data={{
                        displayText: 'Now you can get 16GB of high-speed data every month when you prepay $300 for 12 months of service',
                    }}
                    options={{
                        legalTextSize: 'sm'
                    }}
                />
            )
        }
    },
} as ComponentMeta<typeof Toast>

const Template: ComponentStory<typeof Toast> = (args) => {
    return (
        <Toast {...args}/>
    )
};
export const Toastprimary = Template.bind({});