import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import UnstyledTextInput from '../components/UnStyled/TextInput';

export default {
    title: 'UnStyled TextInput',
    component: UnstyledTextInput,
    args:{
        data: {
            placeholder: 'TextInput Placeholder',
            value: '',
        },
        options: {
            size: 'lg',
        },
    }
} as ComponentMeta<typeof UnstyledTextInput>

const UnstyledTextInputTemplate: ComponentStory<typeof UnstyledTextInput> = (args) => {
    return (
        <UnstyledTextInput
            {...args}
        />
    )
}

export const DefaultUnStyledLink = UnstyledTextInputTemplate.bind({});
