import React, { forwardRef, useEffect, useState } from "react";
import styled from "styled-components";
import { colorPalette } from "../../utils/constants";
import { IStarRatingProps } from "./StarRating.props";

/**
 * @function resolveStarSize
 * @param {'sm' | 'md' | 'lg'} starSize 
 * @returns {string}
 */
const resolveStarSize = (starSize: 'sm' | 'md' | 'lg') => {
    switch(starSize) {
        case 'sm':
            return '12px';
        case 'md':
            return '20px';
        case 'lg':
            return '30px';
        default:
            return '12px';
    }
}

/**
 * @function resolveHoverSize
 * @param {'sm' | 'md' | 'lg'} starSize 
 * @returns {string}
 */
const resolveHoverSize = (starSize: 'sm' | 'md' | 'lg') => {
    switch(starSize) {
        case 'sm':
            return '14px';
        case 'md':
            return '22px';
        case 'lg':
            return '32px';
        default:
            return '14px';
    }
}

const StyledStarRating = styled.button`
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
`;

const StyledStar = styled.span<IStarRatingProps>`
    font-size: ${
        props => props.size ? resolveStarSize(props.size) : resolveStarSize('sm')
    };
    &:hover {
        font-size: ${
            props => props.size ? resolveHoverSize(props.size) : resolveHoverSize('sm')
        };
    }
`;

const StarRating = forwardRef((
    props: IStarRatingProps, 
    ref: React.Ref<HTMLButtonElement>) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const starSelectedColor: string = props.highlightColor ? props.highlightColor : 'yellow';
    const starNotSelectedColor: string = props.defaultColor ? props.defaultColor : colorPalette.defaultGreyColor;

    useEffect(() =>{
        if(props.defaultStarSelection) {
            setRating(props.defaultStarSelection);
        }
    },[]);

    /**
     * @function starClickEvent
     * @description Event to set the star
     * and fire back an event as callback
     * @param {number} starNumber
     */
    const starClickEvent = (starNumber: number) => {
        setRating(starNumber);
        if(props.onClick) {
            props.onClick(starNumber);
        }
    }

    return (
        <div>
            {[...Array(props.maxStarNum)].map((e, i) => {
                i += 1;
                return (
                    <StyledStarRating
                        type="button"
                        key={i}
                        ref={ref}
                        onMouseEnter={() => setHover(i)}
                        onMouseLeave={() => setHover(rating)}
                        style={{color: i<= (hover || rating) ? starSelectedColor : starNotSelectedColor }}
                        id={props?.id}
                        className={props?.className}
                    >
                        <StyledStar 
                            {...props} 
                            onClick={() => starClickEvent(i)}
                        >
                            &#9733;
                        </StyledStar>
                    </StyledStarRating>
                )
            })}
        </div>
    )
});

export default StarRating;
