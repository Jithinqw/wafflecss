import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Link from '../components/Basic/Link/Link'

export default {
    title: 'Link',
    component: Link,
    args: {
        data: {
            displayText: 'Shop Unlimited Plans',
        },
    },
} as ComponentMeta<typeof Link>

const Template: ComponentStory<typeof Link> = (args) => {
    return <Link {...args} />
}
export const Primary = Template.bind({})

const TemplateUnderline: ComponentStory<typeof Link> = (args) => {
    return (
        <Link
            data={{
                ...args.data,
            }}
            options={{
                styleOptions: {
                    color: 'blue',
                },
                underline: true,
            }}
        />
    )
}

const ColorLinkTemplate: ComponentStory<typeof Link> = (args) => {
    return (
        <Link
            data={{
                ...args.data,
            }}
            options={{
                styleOptions: {
                    color: '#cc669',
                },
                underline: true,
            }}
        />
    )
}

const HoverLinkUnderlineTemplate: ComponentStory<typeof Link> = (args) => {
    return (
        <Link
            data={{
                ...args.data,
            }}
            options={{
                styleOptions: {
                    color: '#33cc33',
                },
                underline: false,
                hoverUnderline: true,
            }}
        />
    )
}

const HoverLinkUnderlineTemplateSM: ComponentStory<typeof Link> = (args) => {
    return (
        <Link
            data={{
                ...args.data,
            }}
            options={{
                styleOptions: {
                    color: '#33cc33',
                },
                underline: false,
                hoverUnderline: true,
                size: 'sm',
            }}
        />
    )
}

const HoverLinkUnderlineTemplateMD: ComponentStory<typeof Link> = (args) => {
    return (
        <Link
            data={{
                ...args.data,
            }}
            options={{
                styleOptions: {
                    color: '#800000',
                },
                underline: false,
                hoverUnderline: true,
                size: 'md',
            }}
        />
    )
}

const HoverLinkUnderlineTemplateLG: ComponentStory<typeof Link> = (args) => {
    return (
        <Link
            data={{
                ...args.data,
            }}
            options={{
                styleOptions: {
                    color: '#FF9999',
                },
                underline: false,
                hoverUnderline: true,
                size: 'lg',
            }}
        />
    )
}

export const HoverunderlineLarge = HoverLinkUnderlineTemplateLG.bind({})
export const HoverunderlineMedium = HoverLinkUnderlineTemplateMD.bind({})
export const HoverunderlineSmall = HoverLinkUnderlineTemplateSM.bind({})
export const ColoredLink = ColorLinkTemplate.bind({})
export const Underline = TemplateUnderline.bind({})
export const HoverunderlineColoredLink = HoverLinkUnderlineTemplate.bind({})
