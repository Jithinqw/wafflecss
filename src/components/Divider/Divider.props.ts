export interface IDividerProps {
    data?: IDividerData;
}

interface IDividerData {
    /**
     * @type {string}
     * color of divider
     */
    color?: string;
    /**
     * @type {'dashed' | 'dotted' | 'solid' | 'rounded'}
     * style of divider
     * eg: <Divider 
     *          data={{dividerOption: 'dashed'}}
     *      />
     */
    dividerOptions?: 'dashed' | 'dotted' | 'solid' | 'rounded';

}
