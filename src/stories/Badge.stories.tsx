import React from "react";
import { ComponentStory, 
    ComponentMeta 
} from '@storybook/react';
import Badge from '../components/Badge/Badge'
import { action } from "@storybook/addon-actions";

export default {
    title: 'Badge',
    component: Badge,
    args: {
        data: {
            displayText: 'https://bit.ly/dan-abramov',
            background: 'pink'
        },
        options: {
            color: 'danger',
        },
        events: {
            onClick: Function.prototype
        }
    },
} as ComponentMeta<typeof Badge>

const BadgeTemplate: ComponentStory<typeof Badge> = (args) => {

    return (
        <Badge 
            {...args}
        />
    )
}

const BadgeTestTemplate: ComponentStory<typeof Badge> = (args) => {

    return (
        <Badge 
            {...args}
            events={{
                onClick: action('User clicked on Badge')
            }}
        />
    )
}

export const DefaultBadge = BadgeTemplate.bind({});
export const BadgeEventTest = BadgeTestTemplate.bind({});
