import React from "react";
import styled from "styled-components";
import { IStatusProps } from "./Status.props";

const StyledStatus = styled.span<IStatusProps>`
    display: inline-block;
    width: ${props => props.options?.width ? props.options?.width : '8px'};
    height: ${props => props.options?.height ? props.options?.height : '8px'};
    background: ${props => props.options?.bgColor ? props.options?.bgColor : '#0070f3'};
    border-radius: 50%;
`;

const Status = (props: IStatusProps) =>{
    return (
        <StyledStatus
            onClick={props.events?.onClick}
            {...props}
        />
    )
}

export default React.memo(Status);
