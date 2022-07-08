import styled from "styled-components";
import React from "react";
import { IAlertProps } from "./Alert.props";
import { colorPalette, commonConstant } from "../../models/constants";

/**
 * @function resolveAlertColor
 * @description resolve alert color
 * @param {'error' | 'success' | 'warning' | 'info' | 'dark'} color 
 * @returns {string}
 */
const resolveAlertColor = (
        color: 'error' | 'success' | 'warning' | 'info' | 'dark'
    ) => {
    switch(color) {
        case 'error':
            return colorPalette.errorColor;
        case 'info':
            return colorPalette.infoColor;
        case 'success':
            return colorPalette.successColor;
        case 'warning':
            return colorPalette.warningColor;
        case 'dark':
            return colorPalette.defaultGreyColor;
        default:
            return colorPalette.infoColor;
    }
}

const StyledAlert = styled.div<IAlertProps>`
    width: 100%;
    display: ${commonConstant.flexDisplay};
    -webkit-box-align: center;
    align-items: ${commonConstant.alignItemCenter};
    position: relative;
    overflow: hidden;
    padding-inline-start: 1rem;
    padding-inline-end: 1rem;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    border-radius: 10px;
    background: ${props => props.options?.variants ? resolveAlertColor(props.options?.variants) : resolveAlertColor('info')};
`;

const Alert = (props: IAlertProps) => {
    return (
        <StyledAlert 
            {...props}
            data-testid={props.options?.testId}
            onClick={props.events?.onBodyClick}
        >
            {props.data.displayText}
        </StyledAlert>
    )
}

export default Alert;
