import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Link from '../components/Basic/Link/Link';

export default {
    title: 'Link',
    component: Link,
    argTypes: {},
} as ComponentMeta<typeof Link>

const Template: ComponentStory<typeof Link> = (args) => {
    const propArgs = {
        data: {
            displayText: 'Shop Unlimited Plans'
        }
    }
    return (
        <Link {...propArgs} />
    )
};
export const Primary = Template.bind({});

const TemplateUnderline: ComponentStory<typeof Link> = (args) => {
    const propArgs = {
        data: {
            displayText: 'Learn More'
        },
        options:{
            styleOptions: {
                color: 'blue'
            },
            underline: true
        }
    }
    return (
        <Link {...propArgs} />
    )
};

export const Underline = TemplateUnderline.bind({});

const ColorLinkTemplate: ComponentStory<typeof Link> = (args) => {
    const propArgs = {
        data: {
            displayText: 'See features & benefits'
        },
        options:{
            styleOptions: {
                color: '#cc6699'
            },
            underline: true
        }
    }
    return (
        <Link {...propArgs} />
    )
}

export const ColoredLink = ColorLinkTemplate.bind({});

const HoverLinkUnderlineTemplate: ComponentStory<typeof Link> = (args) => {
    const propArgs = {
        data: {
            displayText: 'View More'
        },
        options:{
            styleOptions: {
                color: '#33cc33'
            },
            underline: false,
            hoverUnderline: true,
        }
    }
    return (
        <Link {...propArgs} />
    )
}

export const HoverunderlineColoredLink = HoverLinkUnderlineTemplate.bind({});

const HoverLinkUnderlineTemplateSM: ComponentStory<typeof Link> = (args) => {
    const propArgs = {
        data: {
            displayText: 'View More'
        },
        options:{
            styleOptions: {
                color: '#33cc33'
            },
            underline: false,
            hoverUnderline: true,
            size: 'sm'
        }
    }
    return (
        <Link {...propArgs} />
    )
}

export const HoverunderlineSmall = HoverLinkUnderlineTemplateSM.bind({});

const HoverLinkUnderlineTemplateMD: ComponentStory<typeof Link> = (args) => {
    const propArgs = {
        data: {
            displayText: 'View More'
        },
        options:{
            styleOptions: {
                color: '#800000'
            },
            underline: false,
            hoverUnderline: true,
            size: 'md'
        }
    }
    return (
        <Link {...propArgs} />
    )
}

export const HoverunderlineMedium = HoverLinkUnderlineTemplateMD.bind({});

const HoverLinkUnderlineTemplateLG: ComponentStory<typeof Link> = (args) => {
    const propArgs = {
        data: {
            displayText: 'View More'
        },
        options:{
            styleOptions: {
                color: '#FF9999'
            },
            underline: false,
            hoverUnderline: true,
            size: 'lg'
        }
    }
    return (
        <Link {...propArgs} />
    )
}

export const HoverunderlineLarge = HoverLinkUnderlineTemplateLG.bind({});