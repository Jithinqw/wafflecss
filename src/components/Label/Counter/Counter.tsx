import React from "react";
import styled from "styled-components";
import { ICounterProps } from "./Counter.props";

const CounterPrimary = styled.span`
    display: inline-block;
    min-width: 20px;
    padding: 0 6px;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    color: white;
    text-align: center;
    background-color: grey;
    border: 1px solid black;
    border-radius: 2em;
`;

const CounterDark = styled.span`
    display: inline-block;
    min-width: 20px;
    padding: 0 6px;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    color: white;
    text-align: center;
    background-color: #6e7781;
    border: 1px solid black;
    border-radius: 2em;
`;

const Counter = (props: ICounterProps) => {

    const resolveCounterTheme = () => {
        switch(props.option?.counterType) {
            case 'primary':
                return  (
                    <CounterPrimary {...props}>
                        {props.data.displayText}
                    </CounterPrimary>
                );
            case 'dark':
                return (
                    <CounterDark {...props}>
                        {props.data.displayText}
                    </CounterDark>
                );
            default:
                return  (
                    <CounterPrimary {...props}>
                        {props.data.displayText}
                    </CounterPrimary>
                );
        }
    }

    return (
        resolveCounterTheme()
    )
}

export default Counter;
