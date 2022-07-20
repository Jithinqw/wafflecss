import React from 'react';
import { 
    ComponentStory, ComponentMeta 
} from '@storybook/react';
import LinkButton from '../components/Basic/Button/LinkButton/LinkButton';
import { action } from '@storybook/addon-actions';

export default {
    title: 'LinkButton',
    component: LinkButton,
    args: {
        data: {
            displayText: 'See more Plans'
        }
    },
} as ComponentMeta<typeof LinkButton>

const Template: ComponentStory<typeof LinkButton> = (args) => {
    return (
        <LinkButton {...args}/>
    )
}

const SmTemplate: ComponentStory<typeof LinkButton> = (args) => {
    return (
        <LinkButton {...args} options={{
            size: 'sm'
        }}/>
    )
}

const LgTemplate: ComponentStory<typeof LinkButton> = (args) => {
    return (
        <LinkButton {...args} options={{
            size: 'lg'
        }}/>
    )
}

const LinkButtonTestAction: ComponentStory<typeof LinkButton> = (args) => {
    return (
        <LinkButton 
            {...args}
            events={{
                onClick: action('User clicked on LinkButton')
            }}
        />
    )
}

const LinkButtonFocusAction: ComponentStory<typeof LinkButton> = (args) => {
    return (
        <LinkButton 
            {...args}
            options={{
                size:'sm'
            }}
            events={{
                onFocus: action('User clicked on LinkButton')
            }}
        />
    )
}

export const LinkButtonLg = LgTemplate.bind({});
export const LinkButtonSm = SmTemplate.bind({});
export const LinkButtonMd = Template.bind({});
export const LinkButtonClickTest = LinkButtonTestAction.bind({});
export const LinkButtonFocusTest = LinkButtonFocusAction.bind({});
