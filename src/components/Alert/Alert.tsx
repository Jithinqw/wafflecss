import styled from "styled-components";
import React, { forwardRef } from "react";
import { IAlertProps } from "./Alert.props";
import { 
    alertConstants, colorPalette, 
    commonConstant 
} from "../../utils/constants";

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
    width: inherit;
    display: ${commonConstant.flexDisplay};
    -webkit-box-align: center;
    align-items: ${commonConstant.alignItemCenter};
    position: relative;
    overflow: hidden;
    padding-inline-start: ${alertConstants.paddingInlineStart};
    padding-inline-end: ${alertConstants.paddingInlineEnd};
    padding-top: ${alertConstants.paddingTop};
    padding-bottom: ${alertConstants.paddingBottom};
    border-radius: ${alertConstants.borderRadius};
    background: ${props => props.options?.variants ? resolveAlertColor(props.options?.variants) : resolveAlertColor('info')};
`;

const Alert = forwardRef((props: IAlertProps, ref:React.Ref<HTMLDivElement>) => {

    return (
        <StyledAlert 
            {...props}
            data-testid={props.options?.testId}
            onClick={props.events?.onBodyClick}
            ref={ref}
            className={props.options?.className}
        >
            {props.data.displayText}
        </StyledAlert>
    )
});

export default Alert;
