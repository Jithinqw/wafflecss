import React from 'react';
import { expect } from '@storybook/jest';
import { within, userEvent } from '@storybook/testing-library';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Link from '../components/Basic/Link/Link';

export default {
    title: 'Link',
    component: Link,
    argTypes: {
        data: {
            displayText: 'dsfsdf'
        }
    },
} as ComponentMeta<typeof Link>

const Template: ComponentStory<typeof Link> = (args) => {
    const propArgs = {
        data: {
        displayText: 'Demo'}
    }
    return (
        <Link {...propArgs} />
    )
};
export const Primary = Template.bind({});

const TemplateUnderline: ComponentStory<typeof Link> = (args) => {
    const propArgs = {
        data: {
            displayText: 'Demo'
        },
        options:{
            color: 'blue',
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
            displayText: 'Demo'
        },
        options:{
            color: '#FF9F29',
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
            displayText: 'Demo'
        },
        options:{
            color: '#FF9F29',
            underline: false,
            hoverUnderline: true,
        }
    }
    return (
        <Link {...propArgs} />
    )
}

export const HoverunderlineColoredLink = HoverLinkUnderlineTemplate.bind({});
