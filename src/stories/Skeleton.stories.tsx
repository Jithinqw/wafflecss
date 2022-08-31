import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Skeleton from '../components/Skeleton/Skeleton'

export default {
    title: 'Skeleton',
    component: Skeleton,
    args: {
        options: {
            color: 'teal',
        },
    },
} as ComponentMeta<typeof Skeleton>

const CircleTemplate: ComponentStory<typeof Skeleton> = args => {
    return (
        <div style={{ width: '500px' }}>
            <Skeleton
                {...args}
                options={{
                    height: 'lg',
                    type: 'circle',
                }}
            />
        </div>
    )
}

const ColTemplate: ComponentStory<typeof Skeleton> = args => {
    return (
        <div style={{ width: '500px' }}>
            <Skeleton
                {...args}
                options={{
                    height: 'sm',
                    type: 'col',
                }}
            />
        </div>
    )
}
export const ColumnSkeleton = ColTemplate.bind({})
export const CircleSkeleton = CircleTemplate.bind({})
