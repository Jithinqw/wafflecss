import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import TextInput from '../components/Basic/Input/TextInput/TextInput'

export default {
    title: 'TextInput',
    component: TextInput,
    argTypes: {},
    args: {
        data: {
            placeholder: 'TextInput Placeholder',
            value: '',
        },
        options: {
            size: 'lg',
        },
    },
} as ComponentMeta<typeof TextInput>

const TextInputTemplate: ComponentStory<typeof TextInput> = (args) => {
    return <TextInput {...args} />
}

export const DefaultTextInput = TextInputTemplate.bind({})
