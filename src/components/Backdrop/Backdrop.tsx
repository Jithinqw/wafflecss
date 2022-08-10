import React, { forwardRef } from "react";
import styled from "styled-components";
import { backDropConstants } from "../../utils/constants";
import { IBackdropProps } from "./Backdrop.props";

const StyledBackdrop = styled.div<IBackdropProps>`
    opacity: 1;
    transition: ${backDropConstants.defaultTransition};
    position: fixed;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    inset: ${backDropConstants.insetDefault};
    background-color: ${props => props.options?.bgColor ? props.options?.bgColor : backDropConstants.bgColor};
    -webkit-tap-highlight-color: transparent;
    color: ${props => props.options?.color ? props.options?.color : backDropConstants.colorDefault};
    z-index: ${backDropConstants.zIndex};
`;

const BackDrop = forwardRef((props: IBackdropProps, ref:React.Ref<HTMLDivElement>) => {
    return (
        props.data?.isVisible ?
            <StyledBackdrop 
                {...props}
                onClick={props.events?.onClick}
                ref={ref}
            >
                {props.data?.children}
            </StyledBackdrop> 
        : null
    )
});

export default BackDrop;
