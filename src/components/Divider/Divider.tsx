import React from "react";
import { IDividerProps } from "./Divider.props";
import styled from "styled-components";

/**
 * @function resolveDividerStyle
 * @param {'dashed' | 'dotted' | 'solid' | 'rounded'} dividerStyle
 * @returns {string}
 */
const resolveDividerStyle = (dividerStyle: 'dashed' | 'dotted' | 'solid' | 'rounded'):string => {
    switch(dividerStyle) {
        case 'dotted':
            return '2px dotted #bbb';
        case 'dashed':
            return '2px dashed #bbb';
        case 'rounded':
            return '2px solid #bbb';
        case 'solid':
            return '2px solid #bbb';
        default:
            return '2px solid #bbb';
    }
}

const StyledHr = styled.hr<IDividerProps>`
    border-top: ${
        props => props.data?.dividerOptions ? resolveDividerStyle(props.data.dividerOptions) : resolveDividerStyle('rounded')
    };
    color: ${props => props.data?.color ? props.data.color : '#bbb'};
`;

const Divider = (props: IDividerProps):JSX.Element => {
    return (
        <StyledHr 
            className={props.data?.className}
            id={props.data?.id}
            {...props}
        />
    )
}

export default Divider;
