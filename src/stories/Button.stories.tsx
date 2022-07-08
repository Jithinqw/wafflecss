import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '../components/Basic/Button/Button';
import { action } from '@storybook/addon-actions';

export default {
    title: 'Button',
    component: Button,
    args: {
        data: {
            displayText: 'Login Here',
        },
        options: {
            variants: 'default',
            size: 'xs'
        },
        events: {
            onClick: Function.prototype,
            onFocus: Function.prototype
        }
    }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => {
    return (
        <Button 
            {...args}
            events={{
                onClick: action('User click'),
                onFocus: action('User focus')
            }}
        />
    )
}
export const DefaultButton = Template.bind({});

