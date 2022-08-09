import React, { ChangeEvent, forwardRef, useState } from "react";
import { IDropdownProps } from "./Dropdown.props";
import styled from "styled-components";
import { ISelectOption } from "../../../../models/defaultStyle";

const StyledOption = styled.select<IDropdownProps>`
    display: block;
    width: 100%;
    padding: 0.375rem 2.25rem 0.375rem 0.75rem;
    -moz-padding-start: calc(0.75rem - 3px);
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: ${props => props.options?.color ? props.options.color : '#212529'};
    background-color: ${props => props.options?.bgColor ? props.options.bgColor : '#fff'};
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 0.75rem center;
    background-size: 16px 12px;
    border: 1px solid #ced4da;
    border-radius: 0.375rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    cursor: ${props => props.data.disabled ? 'not-allowed' : 'pointer'};
    &:after {
        display: block;
        clear: both;
        content: "";
    }
`;


const Dropdown = forwardRef((props: IDropdownProps, ref: React.Ref<HTMLSelectElement>) => {
    const [selectedValue, setSelectedValue] = useState('');

    /**
     * @function onChange
     * @description change handler for input
     * @param {changeEvent} e 
     */
     const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectedValue(e.currentTarget.value);
        if(props?.events?.onChange) {
            props.events.onChange(e.currentTarget.value);
        }
    }

    return (
        <StyledOption 
            onChange={onChange} 
            value={selectedValue} 
            {...props}
            disabled={props.data?.disabled ? props.data?.disabled : false}
            ref={ref}
            className={props.options?.className}
        >
            {
                props.data.optionData && props.data.optionData.map((e: ISelectOption, i: number) => {
                    return (
                        <option value={e.value} key={i}>
                            {e.displayText}
                        </option>
                    )
                })
            }
        </StyledOption>
    )
});

export default Dropdown;
