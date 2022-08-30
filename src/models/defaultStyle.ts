import React from 'react'

export interface Size {
    width: number | undefined
    height: number | undefined
}
/**
 * Default styles applied
 */
export interface IStyleOptions {
    /**
     * background color for an ReactNode
     * @type {number}
     */
    backgroundColor?: string
    /**
     * color for an ReactNode
     * @type {number}
     */
    color?: string
    /**
     * border radius for an ReactNode
     * @type {number}
     */
    borderRadius?: string
    /**
     * font family for an ReactNode
     * @type {number}
     */
    fontFamily?: string
    /**
     * Font weight for an ReactNode
     * @type {number}
     */
    fontWeight?: string
    /**
     * font size for an ReactNode
     * @type {number}
     */
    fontSize?: string
}

/**
 * Image style and attibutes
 * for an image.
 */
export interface ImageData {
    /**
     * @type {string}
     * Image source
     */
    imageSource: string
    /**
     * @type {number}
     */
    height?: number
    /**
     * @type {number}
     */
    width?: number
    /**
     * @type {string}
     */
    alt?: string
    /**
     * @type {Function}
     */
    onClick?: () => void
}

/**
 * DropDown attributes
 */
export interface ISelectOption {
    displayText: string | React.ReactNode
    value: string
}

/**
 * Interface for Checkbox
 */
export interface ICheckboxData {
    displayText: string | React.ReactNode
    value: string
}
