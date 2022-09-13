import React, { forwardRef } from "react";
import styled from "styled-components";
import { backDropConstants, commonConstant } from "../../utils/constants";
import { IBackdropProps } from "./Backdrop.props";

const StyledBackdrop = styled.div<IBackdropProps>`
    opacity: ${commonConstant.defaultOpacity};
    transition: ${backDropConstants.defaultTransition};
    position: ${commonConstant.defaultFixedPosition};
    display: ${commonConstant.flexDisplay};
    -webkit-box-align: center;
    align-items: ${commonConstant.alignItemCenter};
    -webkit-box-pack: ${commonConstant.alignItemCenter};
    justify-content: ${commonConstant.alignItemCenter};
    inset: ${backDropConstants.insetDefault};
    background-color: ${props => props.options?.bgColor ? props.options?.bgColor : backDropConstants.bgColor};
    -webkit-tap-highlight-color: transparent;
    color: ${props => props.options?.color ? props.options?.color : backDropConstants.colorDefault};
    z-index: ${backDropConstants.zIndex};
`;

const BackDrop = forwardRef((
        props: IBackdropProps, 
        ref:React.Ref<HTMLDivElement>
    ):JSX.Element | null => {
    return (
        props.data?.isVisible ?
            <StyledBackdrop 
                {...props}
                onClick={props.events?.onClick}
                ref={ref}
                role={'presentation'}
            >
                {props.data?.children}
            </StyledBackdrop> 
        : null
    )
});

export default BackDrop;
