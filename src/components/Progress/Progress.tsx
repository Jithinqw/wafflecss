import React, { forwardRef } from "react";
import styled, { keyframes, css } from "styled-components";
import { colorPalette, commonConstant } from "../../utils/constants";
import { IProgressProps } from "./Progress.props";

const ProgressWrapper = styled.div<IProgressProps>`
    display: ${commonConstant.flexDisplay};
    height: ${props => props.data.height ? props.data?.height : '0.75rem'};
    overflow: hidden;
    font-size: .75rem;
    background-color: ${colorPalette.defaultGreyColor};
    border-radius: .25rem;
`;

/**
 * @function addStrippedBar
 * @returns {string}
 */
const addStrippedBar = () => `
    background-image: linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);
    background-size: 1rem 1rem;
`;

const AnimateStripes = keyframes`
    0% {
        background-position-x: 1rem;
    }
`;

const ProgressBar = styled.div<IProgressProps>`
    display: ${commonConstant.flexDisplay};
    flex-direction: ${commonConstant.flexColDirection};
    justify-content: center;
    overflow: hidden;
    color: ${colorPalette.defaultWhite};
    text-align: center;
    white-space: nowrap;
    width: ${props => props.data?.width ? props.data?.width : '30%'};
    background-color: ${props => props.data?.color ? props.data?.color : colorPalette.defaultPrimaryButtonColor};
    transition: width .6s ease;
    ${props => props.data?.enableStripe ? addStrippedBar() : ''};
    animation: ${props=> props.data.animateStripe ?  css`${AnimateStripes} 1s linear infinite` : ''};
`;

const Progress = forwardRef((props: IProgressProps, ref: React.Ref<HTMLDivElement>) => {
    return (
        <ProgressWrapper 
            onClick={props.events?.onClick} 
            {...props}
            ref={ref}
            id={props.data.id}
            className={props.data?.className}
            role={'progressbar'}
        >
            <ProgressBar {...props}>
                {props.data?.children}
            </ProgressBar>
        </ProgressWrapper>
    )
});

export default Progress;
