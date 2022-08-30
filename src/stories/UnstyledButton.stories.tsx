import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import UnstyledButton from '../components/UnStyled/Button';
import { action } from '@storybook/addon-actions';

export default {
    title: 'UnStyled Button',
    component: UnstyledButton,
    args:{
        data: {
            displayText: 'Login Here',
        },
        options: {
            variants: 'default',
            size: 'xs',
        },
    }
} as ComponentMeta<typeof UnstyledButton>

const UnStyledButtonTemplate: ComponentStory<typeof UnstyledButton> = (args) => {
    return (
        <UnstyledButton
            {...args}
            events={{
                onClick: action('User click'),
                onFocus: action('User focus'),
            }}
        />
    )
}

export const DefaultUnstyledButton = UnStyledButtonTemplate.bind({});
