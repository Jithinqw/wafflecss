export interface IStackedProgressProps {
    data: IProgressData[];
    options?: IStackedProgressOptions;
}

export interface IProgressData {
    bgColor: string;
    width: number;
}

interface IStackedProgressOptions {
    height?: string;
    borderRadius?: string;
}