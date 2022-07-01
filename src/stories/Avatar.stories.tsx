import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Avatar from '../components/Basic/Image/Avatar/Avatar'

export default {
    title: 'Avatar',
    component: Avatar,
    argTypes: {},
} as ComponentMeta<typeof Avatar>

const AvatarRoundedTemplate: ComponentStory<typeof Avatar> = (args) => {
    const propArgs = {
        data: {
            imageSrc: 'https://bit.ly/dan-abramov',
        },
        options: {
            avatarType: 'rounded'
        }
    }
    return (
        <Avatar 
            {...propArgs}
        />
    )
}

export const AvatarRounded= AvatarRoundedTemplate.bind({});

const AvatarRectTemplate: ComponentStory<typeof Avatar> = (args) => {
    const propArgs = {
        data: {
            imageSrc: 'https://bit.ly/dan-abramov',
        },
        options: {
            avatarType: 'rect'
        }
    }
    return (
        <Avatar 
            {...propArgs}
        />
    )
}

export const AvatarRect = AvatarRectTemplate.bind({});

const AvatarBoardedTemplate: ComponentStory<typeof Avatar> = (args) => {
    const propArgs = {
        data: {
            imageSrc: 'https://bit.ly/dan-abramov',
        },
        options: {
            avatarType: 'bordered'
        }
    }
    return (
        <Avatar 
            {...propArgs}
        />
    )
}

export const AvatarBordered = AvatarBoardedTemplate.bind({});