import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ColorSelector from '../components/Selector/ColorSelector/ColorSelector'
import { action } from '@storybook/addon-actions'

export default {
    title: 'ColorSelector',
    component: ColorSelector,
    args: {
        data: {
            selected: false,
            color: 'teal',
        },
        options: {
            colorSize: 'sm',
            borderColor: 'pink',
        },
    },
} as ComponentMeta<typeof ColorSelector>

const ColorSelectorTemplate: ComponentStory<typeof ColorSelector> = (args) => {
    return <ColorSelector {...args} />
}

const ColorSelectorMdTemplate: ComponentStory<typeof ColorSelector> = (
    args
) => {
    return (
        <ColorSelector
            {...args}
            options={{
                colorSize: 'md',
            }}
        />
    )
}

const ColorSelectorlgTemplate: ComponentStory<typeof ColorSelector> = (
    args
) => {
    return (
        <ColorSelector
            {...args}
            options={{
                colorSize: 'lg',
                borderColor: 'pink',
            }}
        />
    )
}

const ColorSelectorChangeTestTemplate: ComponentStory<typeof ColorSelector> = (
    args
) => {
    return (
        <ColorSelector
            {...args}
            options={{
                colorSize: 'md',
            }}
            events={{
                onChange: action('User clicked on Color selector'),
            }}
        />
    )
}
export const ColorSelectorDefault = ColorSelectorTemplate.bind({})
export const ColorSelectorMd = ColorSelectorMdTemplate.bind({})
export const ColorSelectorlgTemplateWithCustomBorder =
    ColorSelectorlgTemplate.bind({})
export const ColorSelectorChangeTest = ColorSelectorChangeTestTemplate.bind({})
