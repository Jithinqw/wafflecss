export interface IImageProps {
    data: ImageData;
    options?: ImageOptions;
    events?: ImageEvents;
}

interface ImageEvents {
    /**
     * trigger an event on load 
     * of the image
     */
    onLoad?: () => void;
    /**
     * trigger an event on Click 
     * on the image
     */
    onClick?: () => void;
}

interface ImageData {
    /**
     * @type {string}
     * URL for image to render
     */
    imageSrc: string;
    /**
     * @type {string}
     * URL of a fallback image
     * of imageSrc is not rendered
     */
    fallbackImageSrc?: string;
    /**
     * @type {string}
     * alt of image
     */
    alt?: string;
    /**
     * @type {string}
     * height of image
     */
    height?: string;
    /**
     * @type {string}
     * width of image
     */
    width?: string;
}

interface ImageOptions {
    /**
     * @type {'full' | 'none' | 'edged'}
     * @todo Implement this 
     * Border radius of image
     */
    borderRadius?: 'full' | 'none' | 'edged';
    /**
     * @type {string}
     */
    id?: string;
    /**
     * additional styles passed
     */
    className?: string;
}