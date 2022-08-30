export interface IStackProps {
    /**
     * @type {string}
     */
    id?: string;
    /**
     * @type {'center' | 'stretch' | 'flex-start' | 'flex-end'}
     */
    align?: 'center' | 'stretch' | 'flex-start' | 'flex-end';
    /**
     * @type {'center' | 'flexStart' | 'flex-end' | 'space-between' | 'space-around'}
     */
    justify?: 'center' | 'flexStart' | 'flex-end' | 'space-between' | 'space-around';
    /**
     * @type {string}
     */
    className?: string;
    /**
     * @type {string}
     */
    gap?: string;
}