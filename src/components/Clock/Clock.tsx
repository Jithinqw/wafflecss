import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IClockProps } from "./Clock.props";

const TimerClock = (props: IClockProps) => {

    const pad = (value: number) => {
        let str = value.toString();
        while (str.length < 2) {
            str = `0${str}`;
        }
        return str === `60` ? `00`: str;
    }

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
                seconds
            }
        }
        return null;
    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    }, [timeLeft]);

    const StyledDivClock = styled.div`
        color: #333;
        display: flex;
        font-family: CerebriSans-Regular,-apple-system,"system-ui",Roboto,sans-serif;
        justify-content: space-between;
        margin: 2em 0;
        width: 55%;
    `;
    const StyledDiv = styled.div`
        align-items: center;
        color: #333;
        display: flex;
        flex-direction: column;
        font-family: CerebriSans-Regular,-apple-system,"system-ui",Roboto,sans-serif;
        justify-content: center
    `;
    const StyledDigit = styled.span`
        color: #333;
        font-family: CerebriSans-Regular,-apple-system,"system-ui",Roboto,sans-serif;
        font-size: 2em
    `;
    const StyledLabel = styled.span`
        color: #333;
        font-family: CerebriSans-Regular,-apple-system,"system-ui",Roboto,sans-serif;
        font-size: .7em
    `;

    const StyledColon = styled.div`
        align-items: center;
        color: #333;
        display: flex;
        flex-direction: column;
        font-family: CerebriSans-Regular,-apple-system,"system-ui",Roboto,sans-serif;
        font-size: 1.5em;
        justify-content: center;
        margin-top: -24px;
    `;
    return (
        <>
            <StyledDivClock>
                <StyledDiv>
                    <StyledDigit>{timeLeft?.days}</StyledDigit>
                    <StyledLabel>{"days"}</StyledLabel>
                </StyledDiv>
                <StyledColon>:</StyledColon>
                <StyledDiv>
                    <StyledDigit>{timeLeft?.hours}</StyledDigit>
                    <StyledLabel>{"hours"}</StyledLabel>
                </StyledDiv>
                <StyledColon>:</StyledColon>
                <StyledDiv>
                    <StyledDigit>{timeLeft?.minutes}</StyledDigit>
                    <StyledLabel>{"minutes"}</StyledLabel>
                </StyledDiv>
                <StyledColon>:</StyledColon>
                <StyledDiv>
                    <StyledDigit>{timeLeft?.seconds}</StyledDigit>
                    <StyledLabel>{"seconds"}</StyledLabel>
                </StyledDiv>
            </StyledDivClock>
        </>
    )
}

export default TimerClock;
