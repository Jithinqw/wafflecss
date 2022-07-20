import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import LegalText from '../components/Basic/Heading/LegalText/LegalText'

const apr: string = '40.332323%'
const defaultLegalText: string = `ACMI is subject to credit approval and credit limit.
Variable APRs range from 11.74% to ${apr} based on creditworthiness.`

export default {
    title: 'LegalText',
    component: LegalText,
    args: {
        data: {
            displayText: defaultLegalText,
        },
        options: {
            legalTextSize: 'sm',
        },
    },
} as ComponentMeta<typeof LegalText>

const LegalTextTemplate: ComponentStory<typeof LegalText> = (args) => {
    return <LegalText {...args} />
}

const LegalTextMdTemplate: ComponentStory<typeof LegalText> = (args) => {
    return (
        <LegalText
            data={{
                ...args.data,
            }}
            options={{
                legalTextSize: 'md',
            }}
        />
    )
}

const LegalTextLgTemplate: ComponentStory<typeof LegalText> = (args) => {
    return (
        <LegalText
            data={{
                ...args.data,
            }}
            options={{
                legalTextSize: 'lg',
            }}
        />
    )
}

export const LargeSizeLegalText = LegalTextLgTemplate.bind({})
export const MiddleSizeLegalText = LegalTextMdTemplate.bind({})
export const Small = LegalTextTemplate.bind({})
