export interface ILinkProps {
    data: ILinkData;
    options?: ILinkOptions;
    events?: ILinkEvents;
}

interface ILinkEvents {
    onClick?:() => void;
}

interface ILinkData {
    displayText: string;
}

interface ILinkOptions {
    color?: string;
    underline?: boolean;
    hoverUnderline?: boolean;
}