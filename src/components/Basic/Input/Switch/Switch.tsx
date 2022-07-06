import React from "react";
import styled from "styled-components";
import { ISwitchProps } from "./Switch.props";

const Label = styled.label`
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
`;

const StyledSwitch = styled.div`
    position: relative;
    width: 60px;
    height: 32px;
    background: #b3b3b3;
    border-radius: 32px;
    padding: 4px;
    &:before {
        content: "";
        position: absolute;
        width: 28px;
        height: 28px;
        border-radius: 35px;
        top: 50%;
        left: 4px;
        background: white;
        transform: translate(0, -50%);
    }
`;

const Input = styled.input`
    display: none;
    &:checked + ${StyledSwitch} {
        background: green;
        &:before {
            transform: translate(32px, -50%);
        }
    }
`;

const Switch = (props: ISwitchProps) => {
    return (
        <Label>
            <Input 
                type={'checkbox'} 
                onClick={props.events?.onClick}
            />
            <StyledSwitch />
        </Label>
    )
}

export default Switch;
