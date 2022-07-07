import React, { useState } from "react";
import styled from "styled-components";
import { colorPalette } from "../../models/constants";
import { IStarRatingProps } from "./StarRating.props";

/**
 * @function resolveStarSize
 * @param {string} starSize 
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
`;

const StarRating = (props: IStarRatingProps) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const starSelectedColor: string = props.highlightColor ? props.highlightColor : 'yellow';
    const starNotSelectedColor: string = props.defaultColor ? props.defaultColor : colorPalette.defaultGreyColor;

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
                        onMouseEnter={() => setHover(i)}
                        onMouseLeave={() => setHover(rating)}
                        style={{color: i<= (hover || rating) ? starSelectedColor : starNotSelectedColor }}
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
}

export default StarRating;
