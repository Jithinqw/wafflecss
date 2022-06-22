import React from "react";
import styled from "styled-components";
import ILegalTextProps from "./LegalText.props";

const makeLegalStyle = (style?: 'sm' | 'md' | 'lg') => {
    switch(style) {
        case 'sm':
            return '12px';
        case 'md':
            return '14px';
        case 'lg':
            return '18px';
        default:
            return '12px';
    }
}

const StyledLegalText = styled.span<ILegalTextProps>`
    font-size: ${props => props.options?.legalTextSize ? makeLegalStyle(props.options?.legalTextSize) : '12px'};
    line-height: 1.33337;
    font-weight: 400;
    letter-spacing: -.01em;
    color: ${props => props.options?.color ? props.options?.color : 'black'};
    font-family: "inherit";
`;


const LegalText = (props: ILegalTextProps) => {

    return (
        <StyledLegalText {...props}>
            {props.data.displayText}
        </StyledLegalText>
    )
}

export default LegalText;
