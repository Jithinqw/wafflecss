export interface IStarRatingProps {
    maxStarNum: number;
    defaultColor: string;
    highlightColor: string;
    size?: 'sm' | 'md' | 'lg';
    onClick?: (starNumber: number) => void;
}

