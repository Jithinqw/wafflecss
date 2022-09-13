import React, { forwardRef } from "react";
import styled from "styled-components";
import { IStackProps } from "./Stack.props";

const StyledStack = styled.div<IStackProps>`
    display: flex;
    flex-direction: column;
    -webkit-box-align: ${props => props.align ? props.align : 'stretch'};
    align-items: ${props => props.align ? props.align : 'stretch'};
    -webkit-box-pack: ${props => props.justify ? props.justify : 'center'};
    justify-content: ${props => props.justify ? props.justify : 'center'};
    gap: ${props => props.gap ? props.gap : '16px'};
`;

const Stack = forwardRef<HTMLDivElement, IStackProps>((
        props: IStackProps,
        ref: React.Ref<HTMLDivElement>
    ):JSX.Element => {
    return (
        <StyledStack 
            ref={ref}
            id={props?.id}
            className={props?.className}
            {...props}
        >
            {props.children}
        </StyledStack>
    )
});

export default Stack;
