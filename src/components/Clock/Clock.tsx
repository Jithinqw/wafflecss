import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Heading from '../Basic/Heading/Heading';
import { IClockProps } from './Clock.props';

const StyledDivClock = styled.div`
    color: #333;
    display: flex;
`;

const BlinkAnimation = keyframes`
    0%{
        opacity: 0;
    }
    50%{
        opacity: .5;
    }
    100%{
        opacity: 1;
    }
`;

const StyledDiv = styled.div`
    align-items: center;
    color: #333;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const StyledColon = styled.div`
    color: #333;
    display: flex;
    animation: ${BlinkAnimation} 1s linear infinite
`;

const TimerClock = (props: IClockProps) => {

    /**
     * @function pad
     * @description Append `0` if value 
     * length less than 2.
     * @param {number} value
     * @returns {string}
     */
    const pad = (value: number) => {
        let str = value.toString();
        while (str.length < 2) {
            str = `0${str}`;
        }
        return str === `60` ? `00`: str;
    }

    /**
     * @function calculateTimeLeft
     * @description calculate remiaining
     * time from date in props.
     * @returns {string}
     */
    const calculateTimeLeft = () => {
        const deadlineStr = props.endtime;
        const deadline = deadlineStr ? Date.parse(deadlineStr) : 0;
        const diff = deadline - new Date().getTime();
        let days: string;
        let hours: string;
        let minutes: string;
        let seconds: string;

        if(diff > 0) {
            const daysCalc: number = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hoursCalc: number = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const minutesCalc: number = Math.floor((diff / 1000 / 60) % 60);
            const secondsCalc: number = Math.floor((diff / 1000) % 60);
            days = pad(daysCalc);
            hours = pad(hoursCalc);
            minutes = pad(minutesCalc);
            seconds = pad(secondsCalc);
            return {
                days,
                hours,
                minutes,
                seconds,
            }
        }
        return null;
    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())
    const timerLabel: ReadonlyArray<string> = ['DAYS', 'HOURS', 'MINUTES', 'SECONDS'];
    const [noTimeLeftEventTrigger, setNoTimeLeftEventTrigger] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    }, [timeLeft]);

    /**
     * @function resolveTimerLabel
     * @description Resolve label type from props.
     * @param {string} label 
     * @returns {string}
     */
    const resolveTimerLabel = (label: string) => {
        if(props?.labelType === 'lower') {
            return label?.toString()?.toLowerCase();
        }
        return label?.toString()?.toUpperCase();
    }

    /**
     * @function findIfanyDaysRemaining
     * @description If no days are remaining
     * trigger no days events if provided any.
     */
    const findIfanyDaysRemaining = () => {
        if(props?.events?.onNoDaysRemaining && timeLeft?.days === '0') {
            props.events.onNoDaysRemaining();
        }
    }

    /**
     * @function findIfanyHoursRemaining
     * @description If no days are remaining
     * trigger no days events if provided any.
     */
     const findIfanyHoursRemaining = () => {
        if(props?.events?.onNoHourRemaining && timeLeft?.hours === '0') {
            props.events.onNoHourRemaining();
        }
    }

    /**
     * @function findIfanyMinutesRemaining
     * @description If no days are remaining
     * trigger no days events if provided any.
     */
     const findIfanyMinutesRemaining = () => {
        if(props?.events?.onNoMinutesRemaining && timeLeft?.minutes === '0') {
            props.events.onNoMinutesRemaining();
        }
    }

    /**
     * @function findIfAnyTimeLeft
     * @description If no time is left 
     * trigger an event once
     */
    const findIfAnyTimeLeft = () => {
        if(
            props.events?.onNoTimeRemaining &&
            timeLeft?.days === '0' &&
            timeLeft.hours === '0' &&
            timeLeft.minutes === '0' &&
            timeLeft.seconds === '0' &&
            noTimeLeftEventTrigger <= 0
        ) {
            setNoTimeLeftEventTrigger(noTimeLeftEventTrigger + 1);
            props.events.onNoTimeRemaining();
        }
    }

    return (
        <>
            { timeLeft ? 
                <StyledDivClock 
                >
                    <StyledDiv>
                        <Heading 
                            data={{
                                headingText: timeLeft?.days
                            }}
                            options={{
                                ...props.clockOptions
                            }}
                        />
                        <Heading 
                            data={{
                                headingText: resolveTimerLabel(timerLabel[0])
                            }}
                            options={{
                                ...props.labelOptions
                            }}
                        />
                    </StyledDiv>
                    <StyledDiv>
                        <Heading 
                            data={{
                                headingText: timeLeft?.hours
                            }}
                            options={{
                                ...props.clockOptions
                            }}
                        />
                        <Heading 
                            data={{
                                headingText: resolveTimerLabel(timerLabel[1])
                            }}
                            options={{
                                ...props.labelOptions
                            }}
                        />
                    </StyledDiv>
                    <StyledDiv>
                        <Heading 
                            data={{
                                headingText: timeLeft?.minutes
                            }}
                            options={{
                                ...props.clockOptions
                            }}
                        />
                        <Heading 
                            data={{
                                headingText: resolveTimerLabel(timerLabel[2])
                            }}
                            options={{
                                ...props.labelOptions
                            }}
                        />
                    </StyledDiv>
                    <StyledDiv>
                        <Heading 
                            data={{
                                headingText: timeLeft?.seconds
                            }}
                            options={{
                                ...props.clockOptions
                            }}
                        />
                        <Heading 
                            data={{
                                headingText: resolveTimerLabel(timerLabel[3])
                            }}
                            options={{
                                ...props.labelOptions
                            }}
                        />
                    </StyledDiv>
                </StyledDivClock>
                : null
            }
        </>
    )
}

export default TimerClock;
