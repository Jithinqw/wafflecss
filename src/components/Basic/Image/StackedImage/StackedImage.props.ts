import { ImageData } from "../../../../models/defaultStyle"

export interface IStackedImageProps {
    data?: IStackedImageData,
    events?: IStackedImageEvents,
    options?: IStackedImageOptions
}

interface IStackedImageEvents {
    /**
     * Trigger an event on click of image
     */
    onClick?(): void;
    /**
     * Trigger an event on load of image
     */
    onLoad?(): void;
}

interface IStackedImageOptions {
    /**
     * @type {boolean}
     * Add a wiggle animation
     * to stacked image
     */
    wiggleAnimation?: boolean
}

interface IStackedImageData {
    /**
     * Image properties
     * @type {ImageData}
     */
    imageData: Array<ImageData>
}