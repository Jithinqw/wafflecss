import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { colorPalette, commonConstant } from '../../utils/constants';
import { IClockProps } from './Clock.props';

const StyledContainer = styled.div<IClockProps>`
    font-family: ${commonConstant.fontFamily};
    color: ${
        props => props.colorSquash?.timerContainerColor ? props.colorSquash?.timerContainerColor : colorPalette.defaultWhite
    };
    display: inline-block;
    font-weight: 100;
    text-align: center;
    font-size: 30px;
`;

const StyledWrapper = styled.div<IClockProps>`
    padding: 10px;
    border-radius: 3px;
    background: ${
        props => props.colorSquash?.timeWrapperColor ? props.colorSquash?.timeWrapperColor : '#00BF96'
    };
    display: inline-block;
    margin: 4px;
`;

const StyledUnit = styled.span<IClockProps>`
    padding: 15px;
    border-radius: 3px;
    background: ${
        props => props.colorSquash?.timerColor ? props.colorSquash?.timerColor : '#00816A'
    };
    display: inline-block;
`;

const StyledText = styled.div<IClockProps>`
    padding-top: 5px;
    font-size: 16px;
`;

const TimerClock = (props: IClockProps):JSX.Element | null => {

    /**
     * @function pad
     * @description Append `0` if 
     * value length less than `2`.
     * @param {number} value
     * @returns {string}
     */
    const pad = (value: number): string => {
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
    const timerLabel: ReadonlyArray<string> = ['DAY', 'HRS.', 'MINS.', 'SECS.'];

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
    const resolveTimerLabel = (label: string):string => {
        if(props?.labelType === 'lower') {
            return label?.toString()?.toLowerCase();
        }
        return label?.toString()?.toUpperCase();
    }

    return (
        <>
            {
                timeLeft ? (
                    <StyledContainer 
                        id={props?.id} 
                        className={props?.className}
                        {...props}
                        role={'timer'}
                    >
                        {/* Days */}
                        <StyledWrapper {...props}>
                            <StyledUnit {...props}>{timeLeft?.days}</StyledUnit> 
                            <StyledText {...props}>
                                {
                                    resolveTimerLabel(timerLabel[0])
                                }
                            </StyledText>
                        </StyledWrapper>

                        {/* Hours */}
                        <StyledWrapper {...props}>
                            <StyledUnit {...props}>{timeLeft?.hours}</StyledUnit> 
                            <StyledText {...props}>
                                {
                                    resolveTimerLabel(timerLabel[1])
                                }
                            </StyledText>
                        </StyledWrapper>

                        {/* Minutes */}
                        <StyledWrapper {...props}>
                            <StyledUnit {...props}>{timeLeft?.minutes}</StyledUnit> 
                            <StyledText {...props}>
                                {
                                    resolveTimerLabel(timerLabel[2])
                                }
                            </StyledText>
                        </StyledWrapper>

                        {/* Seconds */}
                        <StyledWrapper {...props}>
                            <StyledUnit {...props}>{timeLeft?.seconds}</StyledUnit> 
                            <StyledText {...props}>
                                {
                                    resolveTimerLabel(timerLabel[3])
                                }
                            </StyledText>
                        </StyledWrapper>

                    </StyledContainer>
                ) : null
            }
        </>
    )
}

export default TimerClock;
