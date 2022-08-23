import React from "react";
import styled from "styled-components";
import { commonConstant } from "../../utils/constants";
import { IToggleProps } from "./Toggle.props";

const StyledDetails = styled.details``;
const StyledSummary = styled.summary<IToggleProps>`
    margin-bottom: 0.5rem;
    cursor: pointer;
    font-family: ${
        props => props.options?.parentStyle?.fontFamily ? props.options?.parentStyle?.fontFamily : commonConstant.fontFamily
    };
    font-size: ${
        props => props.options?.parentStyle?.fontSize ? props.options?.parentStyle?.fontSize : '12px'
    };
    &:first-of-type {
        display: list-item;
        counter-increment: list-item 0;
        list-style: inside disclosure-closed;
    }

    ::marker {
        unicode-bidi: isolate;
        font-variant-numeric: tabular-nums;
        text-transform: none;
        text-indent: 0px !important;
        text-align: start !important;
        text-align-last: start !important;
    }
`;

const Toggle = (props: IToggleProps) => {
    return (
        <StyledDetails>
            <StyledSummary 
                {...props} 
                role={'switch'}
            >
                {props.data.parentLabel}
            </StyledSummary>
            <div dangerouslySetInnerHTML={props.data.children} />
        </StyledDetails>
    )
}

export default Toggle;
