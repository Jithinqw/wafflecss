export interface IToggleProps {
    data: IToggleData;
    options?: IToggleOptions;
}

interface IToggleData {
    parentLabel: string;
    children: {
        __html: string;
    }
}

interface IToggleOptions {
    parentStyle?: {
        fontSize?: string;
        fontFamily?: string;
    }
}