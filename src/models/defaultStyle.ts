/**
 * Default styles applied
 */
export interface IStyleOptions {
    /**
     * background color for an ReactNode
     */
    backgroundColor?: string;
    /**
     * color for an ReactNode
     */
    color?: string;
    /**
     * border radius for an ReactNode
     */
    borderRadius?: string;
    /**
     * font family for an ReactNode
     */
    fontFamily?: string;
    /**
     * Font weight for an ReactNode
     */
    fontWeight?: string;
    /**
     * font size for an ReactNode
     */
    fontSize?: string;
}

/**
 * Image style and attibutes 
 * for an image.
 */
export interface ImageData {
    /**
     * Image source
     */
    imageSource: string;
    height?: number;
    width?: number;
    alt?: string;
    onClick?:() => void;
}

/**
 * DropDown attributes
 */
export interface ISelectOption {
    displayText: string;
    value: string;
}

/**
 * Interface for Checkbox
 */
export interface ICheckboxData {
    displayText: string;
    value: string
}