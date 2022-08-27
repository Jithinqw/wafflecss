import React, { forwardRef } from "react";
import styled, { keyframes } from "styled-components";
import { ISnackBarProps } from "./SnackBar.props";

const animationSnack = keyframes`
    opacity: 1;
    transform: none;
    transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}
`;

const StyledSnackBar = styled.div`
    visibility: visible;
    min-width: 250px;
    margin-left: -125px;
    background-color: #333;
    color: #fff;
    text-align: center;
    border-radius: 2px;
    padding: 16px;
    position: fixed;
    z-index: 1;
    left: 50%;
    bottom: 30px;
    font-size: 17px;
    animation: ${animationSnack};
`;

const SnackBar = forwardRef((
        props: ISnackBarProps, 
        ref: React.Ref<HTMLDivElement>
    ) => {
    return (
        props.data.isVisible ? (
            <StyledSnackBar 
                {...props}
                ref={ref}
                onClick={props.events?.onClick} 
            />
        ) : null
    )
});

export default SnackBar;
