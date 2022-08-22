import React from "react";
import styled from "styled-components";
import { colorPalette, commonConstant } from "../../../../utils/constants";
import { ILinkButtonProps } from "./LinkButton.props";

/**
 * @function resolveButtonSize
 * @param {'sm' | 'md' | 'lg'} buttonSize 
 * @returns {string}
 */
const resolveButtonSize = (buttonSize: 'sm' | 'md' | 'lg'):string => {
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
const resolveButtonPadding = (buttonSize:'sm' | 'md' | 'lg'):string => {
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
const resolveButtonFontSize = (buttonSize:'sm' | 'md' | 'lg'):string => {
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
    width: inherit;
    letter-spacing: -0.022em;
    font-family: ${commonConstant.fontFamily};
    min-width: ${props => props.options?.size ? resolveButtonSize(props.options.size) : resolveButtonSize('md')};
    padding: ${props => props.options?.size ? resolveButtonPadding(props.options.size) : resolveButtonPadding('md')};
    border-radius: 980px;
    background: ${colorPalette.linkBgColor};
    color: ${colorPalette.defaultWhite};
    --sk-button-margin-horizontal: 14px;
    --sk-button-margin-vertical: 14px;
`;

const LinkButton = (
        props: ILinkButtonProps, 
    ) => {

    /**
     * @function onClickButton
     * @returns {void}
     */
    const onClickButton = ():void => {
        if(props.events?.onClick) {
            return props.events.onClick();
        }
    }

    /**
     * @function onFocusButton
     * @returns {void}
     */
    const onFocusButton = ():void => {
        if(props.events?.onFocus) {
            return props.events.onFocus();
        }
    }

    /**
     * @function onEnterKeyPressed
     * @param {React.KeyboardEvent<HTMLAnchorElement>} e
     * @returns {void}
     */
    const onEnterKeyPressed = (
            e: React.KeyboardEvent<HTMLAnchorElement>
        ):void => {
        if(props.events?.onKeyDown && e.key.toLowerCase() === 'enter') {
            return props.events.onKeyDown();
        }
    }

    return (
        <StyledLinkButton 
            onClick={onClickButton}
            onFocus={onFocusButton}
            {...props}
            role={'button'}
            id={props.options?.id}
            className={props.options?.className}
            onKeyDown={onEnterKeyPressed}
        >
            {props.data.displayText}
        </StyledLinkButton>
    )
}

export default LinkButton;
