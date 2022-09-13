import React, { forwardRef } from "react";
import styled, { keyframes } from "styled-components";
import { IDrawerProps } from "./Drawer.props";

/**
 * @function resolveSideBarPosition
 * If option is not passed, defaults to left.
 * @default {'left'}
 * @param {'left' | 'right'} option 
 * @returns {string}
 */
const resolveSideBarPosition = (option: 'left' | 'right'):string => {
    switch(option) {
        case 'left':
            return 'left:0';
        case 'right':
            return 'right:0';
        default:
            return 'left:0';
    }
}

const slideIn = keyframes`
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(0%);
    }
`;


const StyledWrapperDiv = styled.div<IDrawerProps>`
    opacity: 1;
    display: block;
    color: rgb(0, 0, 0);
    background-color: ${props =>  props.options?.bgColor ? props.options.bgColor : 'rgb(255, 255, 255)'};
    box-sizing: border-box;
    border-radius: ${props =>  props.options?.borderRadius ? props.options.borderRadius : '0px'};
    box-shadow: rgb(0 0 0 / 5%) 0px 1px 3px, rgb(0 0 0 / 5%) 0px 20px 25px -5px, rgb(0 0 0 / 4%) 0px 10px 10px -5px;
    bottom: 0px;
    top: 0px;
    ${props => props.options?.position ? resolveSideBarPosition(props.options.position) : resolveSideBarPosition('left')};
    width: ${props => props.options?.width ? props.options.width : '400px'};
    max-width: 100%;
    max-height: 115vh;
    position: fixed;
    outline: 0px;
    z-index: 1;
    padding: 24px;
    overflow: scroll;
    animation: ${slideIn} 10ms;
    animation-delay: 10ms;
`;

const Drawer = forwardRef<HTMLDivElement, IDrawerProps>((
        props: IDrawerProps, 
        ref: React.Ref<HTMLDivElement>
    ):JSX.Element | null => {

    return (
        props.data.isVisible ? (
            <StyledWrapperDiv 
                {...props} 
                ref={ref}
                className={props.options?.className}
                id={props.options?.id}
            >
                {props.data.children}
            </StyledWrapperDiv>
        ) : null
    )
});

export default Drawer;
