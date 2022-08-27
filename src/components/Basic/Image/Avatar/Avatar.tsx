import React, { forwardRef } from 'react';
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

const StyledTextAvatar = styled.div<IAvatarProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: cadetblue;
    float: left;
    height: 3rem;
    width: 3rem;
    border-radius: 9999px;
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
        props => props.data?.borderColor ? (props.data?.borderColor + ' 0px 0px 0px 3px') : 'rgba(3, 102, 214, 0.3) 0px 0px 0px 3px'
    };
    vertical-align: middle;
`;

const Avatar = forwardRef((
        props: IAvatarProps,
        ref: React.Ref<HTMLImageElement>
    ) => {
    
    /**
     * @function OnClickEvent
     * @returns {void}
     */
    const OnClickEvent = (): void => {
        if(props.events?.onClick) {
            return props.events.onClick();
        }
    }

    /**
     * @function onLoadEvent
     * @returns {void}
     */
    const onLoadEvent = (): void => {
        if(props.events?.onLoad) {
            return props.events.onLoad();
        }
    }

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
                        ref={ref}
                        height={props.data.height}
                        width={props.data.width}
                        alt={props.data.alt}
                        role={'img'}
                        onClick={OnClickEvent}
                        onLoad={onLoadEvent}
                        className={props.options.className}
                    />
                );
            case 'rect':
                return (
                    <StyledRectAvatarImage {...props}
                        src={props.data.imageSrc}
                        height={props.data.height}
                        ref={ref}
                        width={props.data.width}
                        alt={props.data.alt}
                        role={'img'}
                        onClick={OnClickEvent}
                        onLoad={onLoadEvent}
                        className={props.options.className}
                    />
                );
            case 'text':
                return (
                    <StyledTextAvatar 
                        {...props}
                        role={'img'}
                        className={props.options.className}
                    >
                        <p>{props.data.avatarText}</p>
                    </StyledTextAvatar>
                )
            case 'bordered':
                return (
                    <StyledBorderedAvatarImage {...props}
                        src={props.data.imageSrc}
                        height={props.data.height}
                        width={props.data.width}
                        alt={props.data.alt}
                        ref={ref}
                        onClick={OnClickEvent}
                        onLoad={onLoadEvent}
                        role={'img'}
                        className={props.options.className}
                    />
                )
            default: 
                return (
                    <StyledRectAvatarImage {...props}
                        src={props.data.imageSrc}
                        height={props.data.height}
                        width={props.data.width}
                        alt={props.data.alt}
                        ref={ref}
                        role={'img'}
                        onClick={OnClickEvent}
                        onLoad={onLoadEvent}
                    />
                );
        }
    }

    return (
        resolveAvatar()
    )
});

export default Avatar;
