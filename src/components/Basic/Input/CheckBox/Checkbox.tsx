import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ICheckboxProps } from "./Checkbox.props";

const StyledCheckbox = styled.label<ICheckboxProps>`
    width: 1em;
    height: 1em;
    margin-top: 0.25em;
    vertical-align: top;
    background-color: #fff;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    border: 1px solid rgba(0,0,0,.25);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    -webkit-print-color-adjust: exact;
    color-adjust: exact;
    print-color-adjust: exact;
    &:checked {
        background-color: #0d6efd;
        border-color: #0d6efd;
    }
    &::checked[type=checkbox] {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e");
    }
`;

const StyledCheckboxInput = styled.input`
    width: 1em;
    height: 1em;
    margin-top: 0.25em;
    vertical-align: top;
    background-color: #fff;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    border: 1px solid rgba(0,0,0,.25);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    -webkit-print-color-adjust: exact;
    color-adjust: exact;
    print-color-adjust: exact;
    &:checked {
        background-color: #0d6efd;
        border-color: #0d6efd;
    }
    &:checked {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e");
    }
`;

const CheckBox = (props: ICheckboxProps) => {
    const [isChecked, setIsChecked] = useState(false);

    /**
     * @function onCheckbokStateChange
     * @param {React.FormEvent<HTMLInputElement>} e 
     */
    const onCheckbokStateChange = (e: React.FormEvent<HTMLInputElement>) => {
        setIsChecked(e.currentTarget.checked);
        props.events?.onCheckboxChange(isChecked);
    }

    return(
        <StyledCheckboxInput 
            type={'checkbox'}
            checked={isChecked}
            onChange={onCheckbokStateChange}
        ></StyledCheckboxInput>
    )
}

export default CheckBox;
