import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import PinInput from '../components/Basic/Input/PinInput/PinInput'

export default {
    title: 'PinInput',
    component: PinInput,
    argTypes: {},
    args: {
        data: {
            placeholder: 'TextInput Placeholder',
            value: '2',
        },
        options: {
            size: 'lg',
        },
    },
} as ComponentMeta<typeof PinInput>

const TextPinTemplate: ComponentStory<typeof PinInput> = args => {
    return <PinInput {...args} />
}

export const DefaultPinInput = TextPinTemplate.bind({})
