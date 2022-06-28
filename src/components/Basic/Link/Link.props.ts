import { IStyleOptions } from "../../../models/defaultStyle";

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
    underline?: boolean;
    hoverUnderline?: boolean;
    styleOptions?: IStyleOptions;
    size?: 'sm' | 'md' | 'lg';
}