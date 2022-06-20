import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IClockProps } from './Clock.props';

const StyledDivClock = styled.div`
    color: #333;
    display: flex;
    font-family: sans-serif;
`;

const StyledDiv = styled.div`
    align-items: center;
    color: #333;
    display: flex;
    flex-direction: column;
    font-family: sans-serif;
    justify-content: center;
    margin: 4px 0px 0px 4px;
`;

const StyledDigit = styled.span`
    color: #333;
    font-family: sans-serif;
    font-size: 2em;
`;

const StyledLabel = styled.span`
    color: #333;
    font-family: sans-serif;
    font-size: .7em;
`;

const StyledColon = styled.div`
    align-items: center;
    color: #333;
    display: flex;
    flex-direction: column;
    font-family: sans-serif;
    font-size: 1.5em;
    justify-content: center;
    margin-top: -24px;
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
        if(props.labelType === 'lower') {
            return label?.toString()?.toLowerCase();
        }
        return label?.toString()?.toUpperCase();
    }

    return (
        <>
            { timeLeft ? 
                <StyledDivClock>
                    <StyledDiv>
                        <StyledDigit>{timeLeft?.days}</StyledDigit>
                        <StyledLabel>{resolveTimerLabel(timerLabel[0])}</StyledLabel>
                    </StyledDiv>
                    <StyledColon>:</StyledColon>
                    <StyledDiv>
                        <StyledDigit>{timeLeft?.hours}</StyledDigit>
                        <StyledLabel>{resolveTimerLabel(timerLabel[1])}</StyledLabel>
                    </StyledDiv>
                    <StyledColon>:</StyledColon>
                    <StyledDiv>
                        <StyledDigit>{timeLeft?.minutes}</StyledDigit>
                        <StyledLabel>{resolveTimerLabel(timerLabel[2])}</StyledLabel>
                    </StyledDiv>
                    <StyledColon>:</StyledColon>
                    <StyledDiv>
                        <StyledDigit>{timeLeft?.seconds}</StyledDigit>
                        <StyledLabel>{resolveTimerLabel(timerLabel[3])}</StyledLabel>
                    </StyledDiv>
                </StyledDivClock>
                : null
            }
        </>
    )
}

export default TimerClock;
