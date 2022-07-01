import React from "react";
import { IImageProps } from "./Image.props";
import Utilities from '../../../utils/common'
import DateUtilities from "../../../utils/dateUtil";
const Image = (props: IImageProps) => {
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

    console.log(DateUtilities.isLeap(2010));
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