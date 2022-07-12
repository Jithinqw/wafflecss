import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Quote from '../components/Quote/Quote';
import LegalText from '../components/Basic/Heading/LegalText/LegalText';
import { action } from '@storybook/addon-actions';

const displayText: string = 'When something  is important enough, you do it even if the odds are not in your favour';
export default {
    title: 'Quote',
    component: Quote,
    args: {
        displayNode: (
            <LegalText 
                data={{
                    displayText: displayText
                }}
                options={{
                    legalTextSize: 'md'
                }}
            />
        )
    }
} as ComponentMeta<typeof Quote>

const QuoteTemplate: ComponentStory<typeof Quote> = (args) => {
    return <Quote {...args}/>
}

const QuoteTestTemplate: ComponentStory<typeof Quote> = (args) => {
    return (
        <Quote {...args} onClick={
            action('User Click')
        }
        />
    )
}

export const DefaultQuote = QuoteTemplate.bind({});
export const QuoteTestDefault = QuoteTestTemplate.bind({});
