import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Counter from '../components/Basic/Label/Counter/Counter'

export default {
    title: 'Counter',
    component: Counter,
    args: {
        data: {
            displayText: '232',
        },
    },
} as ComponentMeta<typeof Counter>

const CounterTemplate: ComponentStory<typeof Counter> = args => {
    return <Counter {...args} />
}
export const CounterDefault = CounterTemplate.bind({})

const CounterTemplateDark: ComponentStory<typeof Counter> = args => {
    return (
        <Counter
            {...args}
            options={{
                counterType: 'dark',
            }}
        />
    )
}
export const CounterDark = CounterTemplateDark.bind({})
