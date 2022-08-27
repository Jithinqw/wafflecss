import React, { forwardRef } from "react";
import { IImageProps } from "./Image.props";
import Utilities from '../../../utils/common'

const Image = forwardRef((
        props: IImageProps, 
        ref: React.Ref<HTMLImageElement>
    ) => {
    const [imgSrc, setImageSrc] = React.useState(props.data.imageSrc);

    /**
     * @function resolveImageError
     * @description If error in loading image
     * render fallback image if any.
     * @param {any} event
     */
    const resolveImageError = (event: any) => {
        if(!Utilities.isEmptyObject(event)) {
            return (props.data?.fallbackImageSrc && 
                setImageSrc(props.data?.fallbackImageSrc)
            );
        }
    }

    /**
     * @function OnClickEvent
     * @returns {void}
     */
    const OnClickEvent = (): void => {
        if(props.events?.onClick) {
            props.events.onClick();
        }
    }

    /**
     * @function onLoadEvent
     * @returns {void}
     */
    const onLoadEvent = (): void => {
        if(props.events?.onLoad) {
            props.events.onLoad();
        }
    }

    return (
        <img 
            src={imgSrc}
            width={props.data?.width}
            height={props.data?.height}
            alt={props.data?.alt}
            ref={ref}
            id={props.options?.id}
            role={'img'}
            onError={resolveImageError}
            onClick={OnClickEvent}
            onLoad={onLoadEvent}
            className={props.options?.className}
        />
    )
});

export default Image;
