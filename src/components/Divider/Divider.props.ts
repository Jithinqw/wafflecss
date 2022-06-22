export interface IDividerProps {
    options?: IDividerOptions;
    data?: IDividerData;
}

interface IDividerData {
    color?: string;
}

interface IDividerOptions {
    dividerOptions?: 'dashed' | 'dotted' | 'solid' | 'rounded';
}