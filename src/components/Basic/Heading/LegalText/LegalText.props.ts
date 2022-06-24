export default interface ILegalTextProps {
    data: ILegalTextData;
    options?: ILegalTextOptions;
}

interface ILegalTextData {
    displayText: string;
}

interface ILegalTextOptions {
    legalTextSize?: 'sm' | 'md' | 'lg';
    color?: string;
}