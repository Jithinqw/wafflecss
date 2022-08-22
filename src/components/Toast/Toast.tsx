import React, { forwardRef } from "react";
import styled from "styled-components";
import { IToastProps } from "./Toast.props";

const StyledToastDivContiner = styled.div`
    width: 400px;
    position: absolute;
    bottom: 0px;
    transition: transform 400ms ease-in-out 0s;
    &:first-of-type {
        transform: translate(0px, 0px);
        transition: none 0s ease 0s;
    }
    &:nth-of-type(1) {
        z-index: 5;
    }
`;

const StyledToastWrapper = styled.div`
    overflow-wrap: break-word;
`;

const StyledAlert = styled.div`
    color: #42526E;
    background-color: #FFFFFF;
    box-shadow: (1, 0 0 1px rgba(9, 30, 66, 0.31), 0 20px 32px -8px rgba(9, 30, 66, 0.25));
    width: 100%;
    z-index: 600;
    border-radius: 3px;
    transition: background-color 200ms ease 0s;
`;

const StyledToastBody = styled.div`
    box-sizing: border-box;
    width: 100%;
    padding: 16px;
    border-radius: 3px;
`;

const StyledToastHead = styled.div`
    color: #42526E;
    display: flex;
    -webkit-box-align: start;
    align-items: start;
`;

const StyledCloseButton = styled.button`
    margin-left: 8px;
    padding: 8px 0px 0px;
    flex: 0 0 auto;
    appearance: none;
    background: none;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    line-height: 1;
    white-space: nowrap;
`;

const StyledCloseHolder = styled.span`
    display: inline-block;
    flex-shrink: 0;
    line-height: 1;
    width: 16px;
    height: 16px;
`;

const StyledToastBodyWrapper = styled.div`
    display: flex;
    min-width: 0px;
    padding: 0px 0px 0px 40px;
    -webkit-box-pack: center;
    justify-content: center;
    flex: 1 1 100%;
    flex-direction: column;
    transition: max-height 0.3s ease 0s;
    max-height: 150px;
`;

const StyledToastBodyText = styled.div`
    max-height: 100px;
    overflow: auto;
    overflow-wrap: break-word;
`;

const Toast = forwardRef((props: IToastProps, ref: React.Ref<HTMLDivElement>) => {
    return (
        <StyledToastDivContiner 
            ref={ref} 
            id={props.data?.id} 
            className={props.data.className}
        >
            <StyledToastWrapper>
                <StyledAlert>
                    <StyledToastBody>
                        <StyledToastHead>
                            {props.data.toastHeadNode}
                                <StyledCloseButton onClick={props.events?.onDismiss}>
                                    <StyledCloseHolder>X</StyledCloseHolder>
                                </StyledCloseButton>
                        </StyledToastHead>
                        <StyledToastBodyWrapper>
                            <StyledToastBodyText>
                                {props.data.toastHeadTextNode}
                            </StyledToastBodyText>
                        </StyledToastBodyWrapper>
                    </StyledToastBody>
                </StyledAlert>
            </StyledToastWrapper>
        </StyledToastDivContiner>
    )
});


export default Toast;