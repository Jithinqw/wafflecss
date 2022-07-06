import React from "react";
import styled from "styled-components";
import { commonConstant } from "../../../../models/constants";
import { ICounterProps } from "./Counter.props";

const CounterPrimary = styled.span`
    display: inline-block;
    font-family: ${commonConstant.fontFamily};
    min-width: 20px;
    padding: 0 6px;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    color: black;
    text-align: center;
    background-color: #fff2f2;
    border: 1px solid grey;
    border-radius: 2em;
`;

const CounterDark = styled.span`
    display: inline-block;
    font-family: ${commonConstant.fontFamily};
    min-width: 20px;
    padding: 0 6px;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    color: white;
    text-align: center;
    background-color: black;
    border: 1px solid grey;
    border-radius: 2em;
`;

const Counter = (props: ICounterProps) => {

    /**
     * @function resolveCounterTheme
     * @description Resolve counter theme
     * @returns {React.ReactNode}
     */
    const resolveCounterTheme = () => {
        switch(props.options?.counterType) {
            case 'primary':
                return  (
                    <CounterPrimary 
                        {...props}
                        onClick={props.events?.onClick}
                    >
                        {props.data.displayText}
                    </CounterPrimary>
                );
            case 'dark':
                return (
                    <CounterDark 
                        {...props}
                        onClick={props.events?.onClick}
                    >
                        {props.data.displayText}
                    </CounterDark>
                );
            default:
                return  (
                    <CounterPrimary 
                        {...props}
                        onClick={props.events?.onClick}
                    >
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
