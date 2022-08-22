import React, { ChangeEvent, forwardRef, useState } from "react";
import { IDropdownProps } from "./Dropdown.props";
import styled from "styled-components";
import { ISelectOption } from "../../../../models/defaultStyle";
import { colorPalette } from "../../../../utils/constants";

/**
 * @function resolveDropdownSize
 * @param {sm / md / lg}variants 
 * @returns {string}
 */
const resolveDropdownSize = (variants: 'sm' | 'md' | 'lg'):string => {
    switch(variants) {
        case 'sm':
            return '0.175rem 1.0rem 0.175rem 0.55rem';
        case 'md':
            return '0.275rem 1.25rem 0.275rem 0.65rem';
        case 'lg':
            return '0.475rem 2.50rem 0.475rem 1rem';
        default:
            return '0.275rem 1.25rem 0.275rem 0.65rem';
    }
}

/**
 * @function resolveDropdownFontSize
 * @param {sm / md / lg}variants 
 * @returns {string}
 */
const resolveDropdownFontSize = (variants: 'sm' | 'md' | 'lg'):string => {
    switch(variants) {
        case 'sm':
            return '0.75rem';
        case 'md':
            return '1rem';
        case 'lg':
            return '1.5rem';
        default:
            return '1rem';
    }
}

/**
 * @function resolveDropdownFontSize
 * @param {sm / md / lg}variants 
 * @returns {string}
 */
 const resolveDropdownLineHeight = (variants: 'sm' | 'md' | 'lg'):string => {
    switch(variants) {
        case 'sm':
            return '1.5';
        case 'md':
            return '1.75';
        case 'lg':
            return '2';
        default:
            return '1.75';
    }
}
const StyledOption = styled.select<IDropdownProps>`
    display: block;
    width: 100%;
    padding: ${
        props => props.options?.variants ? resolveDropdownSize(props.options.variants) : resolveDropdownSize('md')
    };
    font-size: ${
        props => props.options?.variants ? resolveDropdownFontSize(props.options.variants) : resolveDropdownFontSize('md')
    };
    font-weight: 400;
    line-height: ${
        props => props.options?.variants ? resolveDropdownLineHeight(props.options.variants) : resolveDropdownLineHeight('md')
    };
    color: ${props => props.options?.color ? props.options.color : colorPalette.defaultBlackColor};
    background-color: ${props => props.options?.bgColor ? props.options.bgColor : colorPalette.defaultWhite};
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 0.75rem center;
    background-size: 16px 12px;
    border:  1px solid ${colorPalette.shadowDropdown};
    border-radius: 0.375rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    appearance: none;
    cursor: ${props => props.data?.disabled ? 'not-allowed' : 'pointer'};

    &:after {
        display: block;
        clear: both;
        content: "";
    }
`;


const Dropdown = forwardRef((
        props: IDropdownProps, 
        ref: React.Ref<HTMLSelectElement>
    ) => {
    const [selectedValue, setSelectedValue] = useState('');

    /**
     * @function onChange
     * @description change handler for input
     * @param {changeEvent} e 
     * @returns {void}
     */
     const onChange = (e: ChangeEvent<HTMLSelectElement>): void => {
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
            id={props.options?.id}
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
