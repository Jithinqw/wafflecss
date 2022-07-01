import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ICheckboxProps } from "./Checkbox.props";

const StyledCheckbox = styled.label<ICheckboxProps>`
    width: 100%;
    font-size: 16px;
    line-height: 18px;
    color: black;
    padding-left: 48px;
    margin-bottom: 12px;
    display: block;
    position: relative;
    cursor: pointer;
    user-select: none;
`;

const StyledSpan = styled.span`
    &:before {
        content: '';
        font-size: 32px;
        line-height: 36px;
        text-align: center;
        box-sizing: border-box;
        position: absolute;
        top: 0;
        left: 0;
        width: 36px;
        height: 36px;
        background-color: white;
        color: blue;
        border: 1px solid grey;
        border-radius: 5px;
        box-shadow: inset 0 2px 4px rgba(grey, 0.5);
    }
`;

const StyledCheckboxInput = styled.input`
    color: #4F46E5; 
    width: 1rem; 
    height: 1rem; 
    border-radius: 0.25rem; 
    border-color: #D1D5DB;
    &:focus {
        box-shadow: inset 0 2px 4px rgba(grey, 0.333);
        border: 1px solid blue;
    }
    &:hover {
        box-shadow: inset 0 2px 4px rgba(blue, 0.333);
        border: 1px solid blue;
    }
`;

const CheckBox = (props: ICheckboxProps) => {
    const [displayText, setDisplayText] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        setDisplayText(props.data.displayText);
    }, []);

    const onCheckbokStateChange = (e: React.FormEvent<HTMLInputElement>) => {
        setIsChecked(e.currentTarget.checked);
        props.events?.onCheckboxChange(isChecked);
    }

    return(
        <StyledCheckbox {...props}>
            {displayText}
            <StyledCheckboxInput 
                type={'checkbox'}
                checked={isChecked}
                onChange={onCheckbokStateChange}
            ></StyledCheckboxInput>
        </StyledCheckbox>
    )
}

export default CheckBox;
