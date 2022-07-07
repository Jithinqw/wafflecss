export interface IStarRatingProps {
    maxStarNum: number;
    defaultColor: string;
    defaultStarSelection?: number;
    highlightColor: string;
    size?: 'sm' | 'md' | 'lg';
    onClick?: (starNumber: number) => void;
}

