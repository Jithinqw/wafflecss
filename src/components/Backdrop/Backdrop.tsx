import React from "react";
import styled from "styled-components";
import { IBackdropProps } from "./Backdrop.props";

const StyledBackdrop = styled.div`
    opacity: 1;
    transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    position: fixed;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    inset: 0px;
    background-color: rgba(0, 0, 0, 0.5);
    -webkit-tap-highlight-color: transparent;
    color: rgb(255, 255, 255);
    z-index: 1201;
`;

const BackDrop = (props: IBackdropProps) => {
    return (
        props.data?.isVisible ?
            <StyledBackdrop {...props}>
                {props.data?.children}
            </StyledBackdrop> 
        : null
    )
}

export default BackDrop;
