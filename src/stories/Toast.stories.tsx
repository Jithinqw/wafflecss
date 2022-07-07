import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Toast from '../components/Toast/Toast';
import LegalText from '../components/Basic/Heading/LegalText/LegalText';


export default {
    title: 'Toast',
    component: Toast,
    argTypes: {},
} as ComponentMeta<typeof Toast>

const Template: ComponentStory<typeof Toast> = (args) => {
    const propArgs = {
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
    }
    return (
        <Toast {...propArgs}/>
    )
};
export const Toastprimary = Template.bind({});