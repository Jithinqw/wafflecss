import React from "react";
import IBadgeProps from "./Badge.props"; 
import styled from "styled-components";

const generateBadgeStyle = (badgeColor: 'warn' | 'success' | 'danger') => {
    switch(badgeColor) {
        case 'warn':
            return '#edf2f7';
        case 'success':
            return ''
        case 'danger':
            return '';
        default:
            return '#edf2f7';
    }
}

const StyledBadge = styled.span`
    display: inline-block;
    white-space: nowrap;
    vertical-align: middle;
    padding-inline-start: 0.25rem;
    padding-inline-end: 0.25rem;
    font-size: 0.75rem;
    border-radius: 0.75rem;
    font-weight: 700;
    background: var(--chakra-colors-gray-100);
    color: rgb(56, 161, 105);
    box-shadow: rgb(56 161 105) 0px 0px 0px 1px inset;
`;

const Badge = (props: IBadgeProps) => {
    return (
        <StyledBadge {...props}>
            {props.data.displayText}
        </StyledBadge>
    )
}

export default Badge;
