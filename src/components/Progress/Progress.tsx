import React from "react";
import styled from "styled-components";
import { IProgressProps } from "./Progress.props";

const ProgressWrapper = styled.div`
    display: flex;
    height: 1rem;
    overflow: hidden;
    font-size: .75rem;
    background-color: grey;
    border-radius: .25rem;
`;

const ProgressBar = styled.div<IProgressProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    color: white;
    text-align: center;
    white-space: nowrap;
    width: ${props => props.data.width ? props.data.width : '30%'};
    background-color: ${props => props.data.color ? props.data.color : 'blue'};
    transition: width .6s ease;
`;

const Progress = (props: IProgressProps) => {
    return (
        <ProgressWrapper onClick={props.events?.onClick}>
            <ProgressBar {...props}>
                {props.data?.children}
            </ProgressBar>
        </ProgressWrapper>
    )
}

export default Progress;
