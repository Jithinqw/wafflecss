import React, { forwardRef } from "react";
import IBadgeProps from "./Badge.props"; 
import styled from "styled-components";
import { commonConstant } from "../../utils/constants";

/**
 * @function generateBadgeStyle
 * @param {'warn' | 'success' | 'danger'} badgeColor 
 * @returns {string}
 */
const generateBadgeStyle = (badgeColor: 'warn' | 'success' | 'danger') => {
    switch(badgeColor) {
        case 'warn':
            return '#edf2f7';
        case 'success':
            return 'green'
        case 'danger':
            return 'red';
        default:
            return '#edf2f7';
    }
}

const StyledBadge = styled.span<IBadgeProps>`
    display: inline-block;
    white-space: nowrap;
    vertical-align: middle;
    padding-inline-start: 0.25rem;
    padding-inline-end: 0.25rem;
    font-size: 0.75rem;
    border-radius: 0.75rem;
    font-weight: 700;
    cursor: pointer;
    font-family: ${commonConstant.fontFamily};
    background: ${props => props.data.background ? props.data.background : 'white'};
    color: ${props => props.options?.color ? generateBadgeStyle(props.options.color) : 'black'};
    box-shadow: rgb(56 161 105) 0px 0px 0px 1px inset;
`;

const Badge = forwardRef((props: IBadgeProps, ref: React.Ref<HTMLSpanElement>) => {
    return (
        <StyledBadge 
            {...props}
            onClick={props.events?.onClick}
            ref={ref}
        >
            {props.data.displayText}
        </StyledBadge>
    )
});

export default Badge;
