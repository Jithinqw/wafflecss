import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '../components/Basic/Button/Button';

export default {
    title: 'Button',
    component: Button,
    argTypes: {
        data: {
            displayText: 'Hey Button',
        }
    },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => {
    const propArgs = {
        data: {
            displayText: 'This is a Extra Small text',
        },
        options: {
            variants: 'default',
            size: 'xs'
        }
    }
    return <Button {...propArgs}/>
}
export const DefaultButton = Template.bind({});

const DangerButtonTempl: ComponentStory<typeof Button> = (args) => {
    const propArgsLg = {
        data: {
            displayText: 'An LG size button',
        },
        options: {
            variants: 'danger',
            size: 'lg'
        }
    }
    const propArgsSm = {
        data: {
            displayText: 'An SM size button',
        },
        options: {
            variants: 'danger',
            size: 'sm'
        }
    }
    const propArgsmd = {
        data: {
            displayText: 'An MD size button',
        },
        options: {
            variants: 'danger',
            size: 'md'
        }
    }
    const propArgsxs = {
        data: {
            displayText: 'An XS size button',
        },
        options: {
            variants: 'danger',
            size: 'xs'
        }
    }
    return (
        <div>
            <span>
                <span>SM Danger Button</span>
                <Button {...propArgsSm}/>
            </span>
            
            <span>
                <span>MD Danger Button</span>
                <Button {...propArgsmd}/>
            </span>

            <span>
                <span>XS Danger Button</span>
                <Button {...propArgsxs}/>
            </span>

            <span>
                <span>LG Danger Button</span>
                <Button {...propArgsLg}/>
            </span>
        </div>
    )
}
export const DangerButton = DangerButtonTempl.bind({});

const OutlineButtonTempl: ComponentStory<typeof Button> = (args) => {
    const propArgs = {
        data: {
            displayText: 'This is a Extra Small text jhghvgcgcn jvmnbvnb kgjgh cgcng',
        },
        options: {
            variants: 'outline',
            size: 'md'
        }
    }
    return (
        <Button {...propArgs}/>
    )
}
export const OutlineButton = OutlineButtonTempl.bind({});

const PrimaryButtonTempl: ComponentStory<typeof Button> = (args) => {
    const propArgs = {
        data: {
            displayText: 'This is a Extra Small text jhghvgcgcn jvmnbvnb kgjgh cgcng',
        },
        options: {
            variants: 'primary',
            size: 'md'
        }
    }
    return (
        <Button {...propArgs}/>
    )
}
export const PrimaryButton = PrimaryButtonTempl.bind({});
