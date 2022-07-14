import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Avatar from '../components/Basic/Image/Avatar/Avatar'
import { action } from '@storybook/addon-actions'

export default {
    title: 'Avatar',
    component: Avatar,
    args: {
        data: {
            imageSrc: 'https://bit.ly/dan-abramov',
        },
        options: {
            avatarType: 'rounded',
        },
    },
} as ComponentMeta<typeof Avatar>

const AvatarTemplate: ComponentStory<typeof Avatar> = (args) => {
    return <Avatar {...args} />
}

const AvatarActionTemplete: ComponentStory<typeof Avatar> = (args) => {
    return (
        <Avatar
            {...args}
            events={{
                onClick: action('User click on Image'),
            }}
        />
    )
}

export const AvatarDefault = AvatarTemplate.bind({})
export const AvatarActionTest = AvatarActionTemplete.bind({})
