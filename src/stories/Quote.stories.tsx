import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Quote from '../components/Quote/Quote';
import LegalText from '../components/Basic/Heading/LegalText/LegalText';

export default {
    title: 'Quote',
    component: Quote,
    args: {
        displayNode: (
            <LegalText data={{
                    displayText: 'Hey from Qoute'
                }}
            />
        )
    }
} as ComponentMeta<typeof Quote>

const QuoteTemplate: ComponentStory<typeof Quote> = (args) => {
    return <Quote {...args}/>
}
export const DefaultQuote = QuoteTemplate.bind({});