import React from "react";
import styled, { keyframes } from "styled-components";
import Utilities from "../../utils/common";
import { IToastProps } from "./Toast.props";

const StyledToast = styled.div<IToastProps>`
    position: fixed;
    left: 0;
    bottom: 1;
    height: 0;
    width: 100%;
    overflow: visible;
`;
const AnimatedToast = keyframes`
    from {
        transform: translateY(100%);
        opacity: 0;
    }
`;

const StyledToastContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: flex-end; */
    flex: 1;
    transition: transform 250ms ease;
    overflow: hidden;
`;

const StyledToastRoot = styled.span`
    display: flex;
    flex: 1;
    padding: 10px 20px;
    margin: 0 0 10px;
    border-radius: 5px;
    background: rgba(0,0,0,0.95);
    color: #fff;
    z-index: 999;
    animation: ${AnimatedToast} 500ms ease forwards 1;
`;



const Toast = (props: IToastProps) => {
    return (
        <StyledToast {...props} id="rootMessage">
            <StyledToastContainer>
                <StyledToastRoot>
                    {props.data.displayText}
                </StyledToastRoot>
            </StyledToastContainer>
        </StyledToast>
    )
}


export default Toast;