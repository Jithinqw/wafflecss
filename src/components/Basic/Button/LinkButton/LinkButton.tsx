import React from "react";
import styled from "styled-components";
import { commonConstant } from "../../../../utils/constants";
import { ILinkButtonProps } from "./LinkButton.props";

/**
 * @function resolveButtonSize
 * @param {'sm' | 'md' | 'lg'} buttonSize 
 * @returns {string}
 */
const resolveButtonSize = (buttonSize: 'sm' | 'md' | 'lg') => {
    switch(buttonSize) {
        case 'sm':
            return '24px';
        case 'md':
            return '28px';
        case 'lg':
            return '33px';
        default:
            return '28px';
    }
}

/**
 * @function resolveButtonPadding
 * @param {'sm' | 'md' | 'lg'} buttonSize 
 * @returns {string}
 */
const resolveButtonPadding = (buttonSize:'sm' | 'md' | 'lg') => {
    switch(buttonSize) {
        case 'sm':
            return '4px 8px';
        case 'md':
            return '8px 16px';
        case 'lg':
            return '12px 20px';
        default:
            return '8px 16px';
    }
}

/**
 * @function resolveButtonFontSize
 * @param {'sm' | 'md' | 'lg'} buttonSize 
 * @returns {string}
 */
const resolveButtonFontSize = (buttonSize:'sm' | 'md' | 'lg') => {
    switch(buttonSize) {
        case 'sm':
            return '12px';
        case 'md':
            return '17px';
        case 'lg':
            return '20px';
        default:
            return '17px';
    }
}

const StyledLinkButton = styled.a<ILinkButtonProps>`
    cursor: pointer;
    text-align: center;
    white-space: nowrap;
    font-size: ${props => props.options?.size ? resolveButtonFontSize(props.options.size) : resolveButtonFontSize('md')};
    line-height: 1.1764805882;
    font-weight: 400;
    letter-spacing: -0.022em;
    font-family: ${commonConstant.fontFamily};
    min-width: ${props => props.options?.size ? resolveButtonSize(props.options.size) : resolveButtonSize('md')};
    padding: ${props => props.options?.size ? resolveButtonPadding(props.options.size) : resolveButtonPadding('md')};
    border-radius: 980px;
    background: #0071e3;
    color: #fff;
    --sk-button-margin-horizontal: 14px;
    --sk-button-margin-vertical: 14px;
`;

const LinkButton = (props: ILinkButtonProps) => {

    const onClickButton = () => {
        if(props.events?.onClick) {
            return props.events.onClick();
        }
    }

    const onFocusButton = () => {
        if(props.events?.onFocus) {
            return props.events.onFocus();
        }
    }

    return (
        <StyledLinkButton 
            onClick={onClickButton}
            onFocus={onFocusButton}
            {...props}
            id={props.options?.id}
        >
            {props.data.displayText}
        </StyledLinkButton>
    )
}

export default LinkButton;
