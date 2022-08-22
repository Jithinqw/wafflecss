import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Loader from '../components/Loader/Loader'

export default {
    title: 'Loader',
    component: Loader,
    args: {
        color: 'red',
    },
} as ComponentMeta<typeof Loader>

const LoaderTemplate: ComponentStory<typeof Loader> = args => {
    return <Loader {...args} />
}

export const Default = LoaderTemplate.bind({})
