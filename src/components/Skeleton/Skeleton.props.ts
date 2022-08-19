export interface ISkeletonProps {
    options?: ISkeletonOptions;
}

interface ISkeletonOptions {
    /**
     * @type {string}
     */
    color?: string;
    /**
     * @type {'sm' | 'xs' | 'lg'}
     */
    height?: 'sm' | 'xs' | 'lg';
    /**
     * @type {'sm' | 'xs' | 'lg'}
     */
    weight?: 'sm' | 'xs' | 'lg';
    /**
     * @type {'col' | 'circle'}
     */
    type?: 'col' | 'circle';
    /**
     * @type {string}
     */
    id?: string;
    /**
     * @type {string}
     */
    className?: string;
}