import React from "react";
import styled from "styled-components";
import { ICenterProps } from "./Center.props";

const StyledCenter = styled.div<ICenterProps>`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    background: ${props => props.data.backgroundColor ? props.data.backgroundColor : 'white'};
    height: ${props => props.data.height ? props.data.height : '80px'};
    width: ${props => props.data.width ? props.data.width : '80px'};
    color: ${props => props.data.color ? props.data.color : 'white'};
`;

const Center = (props: ICenterProps) => {
    return (
        <StyledCenter {...props} onClick={props.events?.onClick}>
            {props.data.children}
        </StyledCenter>
    );
}

export default Center;
