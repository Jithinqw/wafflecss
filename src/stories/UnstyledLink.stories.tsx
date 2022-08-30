import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import UnStyledLink from '../components/UnStyled/Link';
import { action } from '@storybook/addon-actions';

export default {
    title: 'UnStyled Link',
    component: UnStyledLink,
    args:{
        data: {
            displayText: 'Shop Unlimited Plans',
        },
    }
} as ComponentMeta<typeof UnStyledLink>

const UnStyledLinkTemplate: ComponentStory<typeof UnStyledLink> = (args) => {
    return (
        <UnStyledLink
            {...args}
            events={{
                onClick: action('User click'),
            }}
        />
    )
}

export const DefaultUnStyledLink = UnStyledLinkTemplate.bind({});
