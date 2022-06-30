import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Progress from '../components/Progress/Progress';

export default {
    title: 'Progress',
    component: Progress,
    argTypes: {
        data: {
            displayText: 'Hey Button',
        }
    },
} as ComponentMeta<typeof Progress>

const ProgressTemplate: ComponentStory<typeof Progress> = (args) => {
    const propArgs = {
        data: {
            color: 'teal',
            width: '10%',
            height: '5px',
            enableStripe: true,
            animateStripe: true
        }
    }
    return <Progress {...propArgs}/>
}
export const DefaultProgressBar = ProgressTemplate.bind({});