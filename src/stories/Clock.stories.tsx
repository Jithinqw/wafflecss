import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TimerClock from '../components/Clock/Clock';

export default {
    title: 'Timer Clock',
    component: TimerClock,
} as ComponentMeta<typeof TimerClock>

const TimerClockTemplate: ComponentStory<typeof TimerClock> = (args) => {
    const date = new Date();
    date.setDate(date.getDate() + 7);
    return (
        <TimerClock 
            endtime={date.toString()}
            labelOptions={{
                headingColor: 'pink',
                style: 'italics',
                size: 'small'
            }}
            clockOptions={{
                headingColor: 'pink',
                style: 'italics',
                size: 'extralarge'
            }}
        />
    )
}

export const TimerComponentDefault = TimerClockTemplate.bind({});
