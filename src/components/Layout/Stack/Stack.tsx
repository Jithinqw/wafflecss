import React from "react";
import styled from "styled-components";
import { IStackProps } from "./Stack.props";

const StyledStack = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex-direction: row;
`;

const Stack = (props: IStackProps) => {
    return (
        <StyledStack>
            {props.children}
        </StyledStack>
    )
}

export default Stack;
