import React from "react";
import { IImageProps } from "./Image.props";

const Image = (props: IImageProps) => {
    const [imgSrc, setImageSrc] = React.useState(props.data.imageSrc);

    /**
     * @function resolveImageError
     * @description If error in loading image
     * render fallback image if any.
     */
    const resolveImageError = (event: any) => {
        if(event && event != undefined) {
            return (props.data.fallbackImageSrc && 
                setImageSrc(props.data.fallbackImageSrc)
            );
        }
    }

    return (
        <img 
            src={imgSrc}
            width={props.data?.width}
            height={props.data?.height}
            alt={props.data?.alt}
            onError={resolveImageError}
            onClick={props.events?.onClick}
            onLoad={props.events?.onLoad}
        />
    )
}

export default Image;
