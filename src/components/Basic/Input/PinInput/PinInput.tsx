import React, { forwardRef } from "react";
import styled from "styled-components";
import { IPinInputProps } from "./PinInput.props";

const StyledPinInput = styled.input`
    width: 2.5rem;
    min-width: 0px;
    outline: transparent solid 2px;
    outline-offset: 2px;
    position: relative;
    appearance: none;
    transition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;
    transition-duration: 200ms;
    text-align: center;
    font-size: 1rem;
    height: 2.5rem;
    border-radius: 0.375rem;
    border-width: 1px;
    border-style: solid;
    border-image: initial;
    border-color: inherit;
    background: inherit;    
`;

const PinInput = forwardRef((props: IPinInputProps, ref: React.Ref<HTMLInputElement>) => {
    return (
        <StyledPinInput 
            value={props.data.value}
            id={props.data?.id}
            placeholder={props.data.placeholder ? props.data.placeholder : '○'}
            ref={ref}
            onChange={props.events?.onChange}
            autoComplete="off"
            disabled={props.data.isDisabled}
        />
    )
});

export default PinInput