export interface ISkeletonProps {
    options?: ISkeletonOptions;
}

interface ISkeletonOptions {
    color?: string;
    height?: 'sm' | 'xs' | 'lg';
    type?: 'col' | 'circle';
}