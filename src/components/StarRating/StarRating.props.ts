export interface IStarRatingProps {
    /**
     * @type {number}
     * maximum number of 
     * stars for rating
     */
    maxStarNum: number;
    /**
     * @type {string}
     * default color if not 
     * active
     */
    defaultColor: string;
    /**
     * @type {number}
     * default selected star
     */
    defaultStarSelection?: number;
    /**
     * @type {string}
     * Color of highlighed star
     */
    highlightColor: string;
    /**
     * @type {'sm' | 'md' | 'lg'}
     * size of star
     */
    size?: 'sm' | 'md' | 'lg';
    /**
     * Trigger an callback if click on
     * star.
     */
    onClick?: (starNumber: number) => void;
}

