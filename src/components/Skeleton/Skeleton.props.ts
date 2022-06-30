export interface ISkeletonProps {
    options?: ISkeletonOptions;
}

interface ISkeletonOptions {
    color?: string;
    height?: 'sm' | 'xs' | 'lg';
    weight?: 'sm' | 'xs' | 'lg';
    type?: 'col' | 'circle';
}