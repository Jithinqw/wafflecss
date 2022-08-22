import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import TimerClock from '../components/Clock/Clock'

export default {
    title: 'Timer Clock',
    component: TimerClock,
    args: {},
} as ComponentMeta<typeof TimerClock>

const TimerClockTemplate: ComponentStory<typeof TimerClock> = args => {
    const date = new Date()
    date.setDate(date.getDate() + 7)

    return <TimerClock {...args} endtime={date.toString()} />
}

export const TimerComponentDefault = TimerClockTemplate.bind({})
