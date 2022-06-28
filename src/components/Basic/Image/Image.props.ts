export interface IImageProps {
    data: ImageData;
    options?: ImageOptions;
    events?: ImageEvents;
}

interface ImageEvents {
    onLoad?: () => void;
    onClick?: () => void;
}

interface ImageData {
    imageSrc: string;
    fallbackImageSrc?: string;
    alt?: string;
    height?: string;
    width?: string;
}

interface ImageOptions {
    borderRadius?: 'full' | 'none' | 'edged';
}