import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import LegalText from '../components/Basic/Heading/LegalText/LegalText';

const apr: string = '40.332323%';
const defaultLegalText: string = `Qualified Purchasers receive an Apple Gift Card when they purchase an eligible Mac or iPad at a Qualifying Location. Only one Apple Gift Card per eligible Mac or iPad per Qualified Purchaser. Offer subject to availability. While supplies last. Qualified Purchasers shall receive a discount equal to the value of the Apple Gift Card off the price of the eligible Mac or iPad, 
    but will be charged for all items in their cart, including the Apple Gift Card. Important notice regarding the checkout receipt and monthly statement for Apple Card Monthly Installment (ACMI) purchases with this promotion: Qualified Purchasers selecting ACMI (a 0% APR payment option) as payment type at checkout shall receive a discount equal to the value of the Apple Gift Card off the price of the eligible
    Mac or iPad. This will result in one ACMI installment plan over 12 months for the eligible iPad or Mac discounted by the instant credit, and a second ACMI installment plan over 12 months for the full price of the Apple Gift Card. The total combined amount charged over the two separate ACMI installment plans will reflect the original full retail price of the Eligible Product. Separately, Qualified Purchasers
    will receive and be charged for the Apple Gift Card in the amount of the applicable discount off the eligible Mac or iPad. ACMI is subject to credit approval and credit limit. Variable APRs range from 11.74% to ${apr} based on creditworthiness.`;

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