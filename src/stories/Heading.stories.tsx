import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Heading from '../components/Basic/Heading/Heading'

export default {
    title: 'Heading',
    component: Heading,
    args: {
        data: {
            headingText: "Supreme allied commander",
        },
    },
} as ComponentMeta<typeof Heading>

const HeadingTemplateSmall: ComponentStory<typeof Heading> = (args) => {
    return (
        <Heading 
            data={{
                ...args.data
            }}
            options={{
                size: 'small'
            }}
        />
    )
};
export const Small = HeadingTemplateSmall.bind({});

const HeadingTemplateNormal: ComponentStory<typeof Heading> = (args) => {
    return (
        <Heading 
            data={{
                ...args.data
            }}
            options={{
                size: 'normal'
            }}
        />
    )
};
export const Normal = HeadingTemplateNormal.bind({});

const HeadingTemplateExtraSamll: ComponentStory<typeof Heading> = (args) => {
    return (
        <Heading 
            data={{
                ...args.data
            }}
            options={{
                size: 'extrasmall'
            }}
        />
    )
};
export const ExtraSmall = HeadingTemplateExtraSamll.bind({});

const HeadingTemplateBold: ComponentStory<typeof Heading> = (args) => {
    return (
        <Heading 
            data={{
                ...args.data
            }}
            options={{
                size: 'normal',
            }}
        />
    )
};
export const Bold = HeadingTemplateBold.bind({});

const HeadingTemplateExtraBold: ComponentStory<typeof Heading> = (args) => {
    return (
        <Heading 
            {...args}
            options= {{
                size: 'large',
            }}
        />
    )
};
export const ExtraBold = HeadingTemplateExtraBold.bind({});

const HeadingTemplateNormalStyle: ComponentStory<typeof Heading> = (args) => {
    return (
        <Heading 
            {...args}
            options= {{
                weight: 'normal'
            }}
        />
    )
};
export const WeightNormal = HeadingTemplateNormalStyle.bind({});

