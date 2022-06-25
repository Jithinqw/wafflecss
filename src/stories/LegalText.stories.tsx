import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import LegalText from '../components/Basic/Heading/LegalText/LegalText';

export default {
    title: 'LegalText',
    component: LegalText,
    argTypes: {
        data: {
            displayText: 'Hey Legal Text',
        }
    },
} as ComponentMeta<typeof LegalText>

const LegalTextTemplate: ComponentStory<typeof LegalText> = (args) => {
    const propArgs = {
        data: {
            displayText: 'This is a Legal Text',
        },
        options:{
            legalTextSize: 'sm'
        }
    }
    return (
        <LegalText 
            {...propArgs} 
        />
    )
};

export const Small = LegalTextTemplate.bind({});