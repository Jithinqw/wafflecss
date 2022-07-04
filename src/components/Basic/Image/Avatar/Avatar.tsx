import React from 'react';
import styled from 'styled-components';
import { IAvatarProps } from './Avatar.props';

const StyledRoundedAvatarImage = styled.img<IAvatarProps>`
    border-radius: 9999px;
    width: ${props => props.data?.width ? props.data?.width : '2.5rem'};
    height: ${props => props.data?.height ? props.data?.height : '2.5rem'};
    max-width: 100%;
    display: block;
    vertical-align: middle;
`;

const StyledRectAvatarImage = styled.img<IAvatarProps>`
    border-radius: 0.25rem;
    width: ${props => props.data?.width ? props.data?.width : '2.5rem'};
    height: ${props => props.data?.height ? props.data?.height : '2.5rem'};
    max-width: 100%;
    display: block;
    vertical-align: middle;
    src: ${props => props.data.imageSrc ? props.data.imageSrc : ''};
`;

const StyledBorderedAvatarImage = styled.img<IAvatarProps>`
    border-radius: 9999px;
    width: ${props => props.data?.width ? props.data?.width : '2.5rem'};
    height: ${props => props.data?.height ? props.data?.height : '2.5rem'};
    max-width: 100%;
    display: block;
    box-shadow: ${
        props => props.data?.borderColor ? props.data?.borderColor + ' 0px 0px 0px 3px' : 'rgba(3, 102, 214, 0.3) 0px 0px 0px 3px'};
    vertical-align: middle;
`;

const Avatar = (props: IAvatarProps) => {

    /**
     * @function resolveAvatar
     * @description Returns a styled component
     * @returns {React.ReactNode}
     */
    const resolveAvatar = () => {
        switch(props.options?.avatarType) {
            case 'rounded':
                return (
                    <StyledRoundedAvatarImage {...props}
                        src={props.data.imageSrc}
                        height={props.data.height}
                        width={props.data.width}
                        alt={props.data.alt}
                        onClick={props.events?.onClick}
                        onLoad={props.events?.onLoad}
                    />
                );
            case 'rect':
                return (
                    <StyledRectAvatarImage {...props}
                        src={props.data.imageSrc}
                        height={props.data.height}
                        width={props.data.width}
                        alt={props.data.alt}
                        onClick={props.events?.onClick}
                        onLoad={props.events?.onLoad}
                    />
                );
            case 'bordered':
                return (
                    <StyledBorderedAvatarImage {...props}
                        src={props.data.imageSrc}
                        height={props.data.height}
                        width={props.data.width}
                        alt={props.data.alt}
                        onClick={props.events?.onClick}
                        onLoad={props.events?.onLoad}
                    />
                )
            default: 
                return (
                    <StyledRectAvatarImage {...props}
                        src={props.data.imageSrc}
                        height={props.data.height}
                        width={props.data.width}
                        alt={props.data.alt}
                        onClick={props.events?.onClick}
                        onLoad={props.events?.onLoad}
                    />
                );
        }
    }

    return (
        resolveAvatar()
    )
}

export default Avatar;
