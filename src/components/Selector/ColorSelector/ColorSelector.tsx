import React, { forwardRef, useEffect, useState } from "react";
import styled from "styled-components";
import Utilities from "../../../utils/common";
import { IColorPickerProps } from "./ColorSelector.props";

/**
 * @function resolveColorSelectorSize
 * @param {'sm' | 'md' | 'lg'} selectorSize 
 * @returns {string}
 */
const resolveColorSelectorSize = (selectorSize: 'sm' | 'md' | 'lg'):string => {
    switch(selectorSize) {
        case 'sm':
            return '26px';
        case 'md':
            return '40px';
        case 'lg':
            return '56px';
        default:
            return '26px';
    }
}

/**
 * @function resolveAfterEffect
 * @param {'sm' | 'md' | 'lg'} selectorSize 
 * @returns {string}
 */
const resolveAfterEffect = (selectorSize: 'sm' | 'md' | 'lg'):string => {
    switch(selectorSize) {
        case 'sm':
            return '1px';
        case 'md':
            return '5px';
        case 'lg':
            return '9px';
        default:
            return '2px';
    }
}

/**
 * @function resolveCircleSize
 * @param {'sm' | 'md' | 'lg'} selectorSize 
 * @returns {string}
 */
const resolveCircleSize = (selectorSize: 'sm' | 'md' | 'lg'):string => {
    switch(selectorSize) {
        case 'sm':
            return '20px';
        case 'md':
            return '25px';
        case 'lg':
            return '35px';
        default:
            return '20px';
    }
}

/**
 * @function resolveBorderColor
 * @description Resolve optional border color 
 * from user from options param.
 * @param {string} borderColor 
 * @returns {string}
 */
const resolveBorderColor = (borderColor?: string):string => {
    if(borderColor && !Utilities.isEmpty(borderColor)) {
        return borderColor;
    }
    return '#0057b8';
}

const StyledLabel = styled.label<IColorPickerProps>`
    margin: 8px 6px;
    z-index: 0;
    border-radius: 3px;
    background-color: #FFFFFF;
    z-index: auto;
    color: #454b52 !important;
    position: relative !important;
    align-items: center;
    display: inline-flex !important;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const StyledInput = styled.input<IColorPickerProps>`
    position: absolute;
    border-radius: 100%;
    opacity: 0.01;
    z-index: 1;
    cursor: pointer;
    position: absolute !important;
    height: ${
        props => props.options?.colorSize ? resolveColorSelectorSize(props.options.colorSize) : resolveColorSelectorSize('md')
    };
    width: ${
        props => props.options?.colorSize ? resolveColorSelectorSize(props.options.colorSize) : resolveColorSelectorSize('md')
    };
`;

const StyledSpan = styled.span<IColorPickerProps>`
    border: 2px solid ${props => resolveBorderColor(props.options?.borderColor)};
    transition: border 0.3s ease-in-out;
    border-radius: 3px;
    z-index: 0;
    position: relative !important;
    display: flex !important;
    height: ${
        props => props.options?.colorSize ? resolveColorSelectorSize(props.options.colorSize) : resolveColorSelectorSize('md')
    };
    width: ${
        props => props.options?.colorSize ? resolveColorSelectorSize(props.options.colorSize) : resolveColorSelectorSize('md')
    };
    &:after {
        background-color: currentColor;
        border: 1px solid #DCDEF3;
        color: currentColor;
        position: relative;
        transition: border 0.3s ease-in-out;
        border-radius: 100%;
        content: "";
        height: ${
            props => props.options?.colorSize ? resolveCircleSize(props.options.colorSize) : resolveCircleSize('md')
        };
        width: ${
            props => props.options?.colorSize ? resolveCircleSize(props.options.colorSize) : resolveCircleSize('md')
        };
        left: ${
            props => props.options?.colorSize ? resolveAfterEffect(props.options.colorSize) : resolveAfterEffect('md')
        };
        top: ${
            props => props.options?.colorSize ? resolveAfterEffect(props.options.colorSize) : resolveAfterEffect('md')
        };
    }
`;

const StyledSpanWrapper = styled.span<IColorPickerProps>`
    height: ${
        props => props.options?.colorSize ? resolveColorSelectorSize(props.options.colorSize) : resolveColorSelectorSize('md')
    };
    width: ${
        props => props.options?.colorSize ? resolveColorSelectorSize(props.options.colorSize) : resolveColorSelectorSize('md')
    };
    border: none !important;
    position: absolute !important;
    display: flex !important;
    z-index: 0;
    border-radius: 3px;
`;

const ColorSelector = forwardRef((
        props: IColorPickerProps, 
        ref: React.Ref<HTMLInputElement>
    ) => {

    const [isChecked, setIsChecked] = useState<boolean>(false);

    useEffect(() =>{
        setIsChecked(props.data.selected);
    }, []);

    /**
     * @function onRadioStateChange
     * @param {React.KeyboardEvent<HTMLInputElement>} e 
     */
     const onRadioStateChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
        e.preventDefault();
        if(e.key === 'Tab' || e.key === 'Enter') {
            setIsChecked(!isChecked);
            if(props.events?.onChange) {
                props.events?.onChange(isChecked, e.currentTarget.value);
            }
        }
        
    }

     /**
     * @function onLabelStateChange
     * @param {React.FormEvent<HTMLInputElement>} e 
     */
      const onLabelStateChange = (e: React.FormEvent<HTMLLabelElement>) => {
        e.preventDefault();
        setIsChecked(!isChecked);
        if(props.events?.onChange && e.currentTarget.nodeValue) {
            props.events?.onChange(isChecked, e.currentTarget.nodeValue);
        }
    }

    /**
     * @function resolveSelectedColor
     * @param {boolean} isChecked 
     * @returns {string}
     */
    const resolveSelectedColor = (isChecked: boolean):string => {
        if(isChecked) {
            return props.options?.borderColor ? props.options.borderColor : '#0057b8';
        } else {
            return '#fff';
        }
    }

    return (
        <StyledLabel
            onMouseDown={onLabelStateChange}
            {...props}
            className={props.options?.className}
            id={props.options?.id}
        >
            <StyledInput
                ref={ref}
                type={'radio'} 
                value={props.data.color}
                checked={isChecked}
                defaultChecked={props.data.selected}
                onKeyDown={onRadioStateChange}
                tabIndex={0}
                onChange={e => {}}
                role={'radio'}
                {...props}
            />
                <StyledSpan 
                    style={{
                        color: props.data.color,
                        border: `2px solid ${resolveSelectedColor(isChecked)}`
                    }}
                    {...props}
                />
                <StyledSpanWrapper {...props}/>
        </StyledLabel>
    )
});

export default ColorSelector;
