import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Heading from '../components/Heading/Heading'

export default {
    title: 'Heading',
    component: Heading,
    argTypes: {
        data: {
            headingText: "sdfsdf",
        },
        options: {
            size: 'sm'
        }
    },
} as ComponentMeta<typeof Heading>

const HeadingTemplateSmall: ComponentStory<typeof Heading> = (args) => {
    const propArgs = {
        data: {
            headingText: 'This is a Small Text',
        },
        options: {
            size: 'small'
        }
    }
    return (
        <Heading 
            {...propArgs} 
        />
    )
};
export const Small = HeadingTemplateSmall.bind({});

const HeadingTemplateNormal: ComponentStory<typeof Heading> = (args) => {
    const propArgs = {
        data: {
            headingText: 'This is a normal text',
        },
        options: {
            size: 'normal'
        }
    }
    return (
        <Heading 
            {...propArgs} 
        />
    )
};
export const Normal = HeadingTemplateNormal.bind({});

const HeadingTemplateExtraSamll: ComponentStory<typeof Heading> = (args) => {
    const propArgs = {
        data: {
            headingText: 'This is a Extra Small text',
        },
        options: {
            size: 'extrasmall'
        }
    }
    return (
        <Heading 
            {...propArgs} 
        />
    )
};
export const ExtraSmall = HeadingTemplateExtraSamll.bind({});

const HeadingTemplateBold: ComponentStory<typeof Heading> = (args) => {
    const propArgs = {
        data: {
            headingText: 'This is a Bold text',
        },
        options: {
            size: 'bold'
        }
    }
    return (
        <Heading 
            {...propArgs} 
        />
    )
};
export const Bold = HeadingTemplateBold.bind({});

const HeadingTemplateExtraBold: ComponentStory<typeof Heading> = (args) => {
    const propArgs = {
        data: {
            headingText: 'This is a Extra Bold text',
        },
        options: {
            size: 'extrabold'
        }
    }
    return (
        <Heading 
            {...propArgs} 
        />
    )
};
export const ExtraBold = HeadingTemplateExtraBold.bind({});

const HeadingTemplateNormalStyle: ComponentStory<typeof Heading> = (args) => {
    const propArgs = {
        data: {
            headingText: 'This is a Extra Bold text',
        },
        options: {
            weight: 'normal'
        }
    }
    return (
        <Heading 
            {...propArgs} 
        />
    )
};
export const WeightNormal = HeadingTemplateNormalStyle.bind({});

