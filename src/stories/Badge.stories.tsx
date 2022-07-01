import React from "react";
import { ComponentStory, 
    ComponentMeta 
} from '@storybook/react';
import Badge from '../components/Badge/Badge'

export default {
    title: 'Badge',
    component: Badge,
    argTypes: {},
} as ComponentMeta<typeof Badge>

const BadgeTemplate: ComponentStory<typeof Badge> = (args) => {
    const propArgs = {
        data: {
            displayText: 'https://bit.ly/dan-abramov',
            background: 'pink'
        },
        options: {
            color: 'danger',
        }
    }
    return (
        <Badge 
            {...propArgs}
        />
    )
}

export const DefaultBadge = BadgeTemplate.bind({});