import React, { forwardRef } from "react";
import styled from "styled-components";
import { IStackProps } from "./Stack.props";

const StyledStack = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex-direction: row;
`;

const Stack = forwardRef((props: IStackProps, ref: React.Ref<HTMLDivElement>) => {
    return (
        <StyledStack 
            ref={ref}
            id={props?.id}
            className={props?.className}
        >
            {props.children}
        </StyledStack>
    )
});

export default Stack;
