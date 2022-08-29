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
    background-color: rgb(248, 249, 250);
    height: 300px;
`;

const Stack = forwardRef((
        props: IStackProps, 
        ref: React.Ref<HTMLDivElement>
    ) => {
    return (
        <StyledStack 
            ref={ref}
            id={props?.id}
            className={props?.className}
            {...props}
        >
        </StyledStack>
    )
});

export default Stack;
