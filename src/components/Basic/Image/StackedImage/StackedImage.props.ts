export interface ImageData {
    imageSource: string;
    height: number;
    width: number;
    alt: string;
    onClick?:() => void;
}

export interface IStackedImageProps {
    data?: IStackedImageData,
    events?: IStackedImageEvents,
    options?: IStackedImageOptions
}

interface IStackedImageEvents {
    onClick?(): void,
    onLoad?(): void,
}

interface IStackedImageOptions {
    style?: React.CSSProperties,
    wiggleAnimation?: boolean
}

interface IStackedImageData {
    imageData: Array<ImageData>
}