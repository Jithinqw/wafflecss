import React from "react";
import { ComponentStory,
    ComponentMeta 
} from '@storybook/react';
import LegalText from '../components/Basic/Heading/LegalText/LegalText';

const apr: string = '40.332323%';
const defaultLegalText: string = `ACMI is subject to credit approval and credit limit.
Variable APRs range from 11.74% to ${apr} based on creditworthiness.`;

export default {
    title: 'LegalText',
    component: LegalText,
    argTypes: {},
} as ComponentMeta<typeof LegalText>

const LegalTextTemplate: ComponentStory<typeof LegalText> = (args) => {
    const propArgs = {
        data: {
            displayText: defaultLegalText,
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

const LegalTextMdTemplate: ComponentStory<typeof LegalText> = (args) => {
    const propArgs = {
        data: {
            displayText: defaultLegalText,
        },
        options:{
            legalTextSize: 'md'
        }
    }
    return (
        <LegalText 
            {...propArgs} 
        />
    )
};

export const MiddleSizeLegalText = LegalTextMdTemplate.bind({});

const LegalTextLgTemplate: ComponentStory<typeof LegalText> = (args) => {
    const propArgs = {
        data: {
            displayText: defaultLegalText,
        },
        options:{
            legalTextSize: 'lg'
        }
    }
    return (
        <LegalText 
            {...propArgs} 
        />
    )
};

export const LargeSizeLegalText = LegalTextLgTemplate.bind({});