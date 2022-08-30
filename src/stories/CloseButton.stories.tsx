import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import CloseButton from '../components/Basic/Button/CloseButton/CloseButton'

export default {
    title: 'Close Button',
    component: CloseButton,
    args: {},
} as ComponentMeta<typeof CloseButton>

const CloseButtonTemplate: ComponentStory<typeof CloseButton> = args => {
    return <CloseButton {...args} />
}

export const CloseButtonDefault = CloseButtonTemplate.bind({})
