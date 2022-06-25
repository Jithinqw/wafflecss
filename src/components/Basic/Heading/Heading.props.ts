import { AnimationType } from "../../../models/Animation";

export interface IHeadingProps {
    data: IHeadingData;
    events?: IHeadingEvents;
    options?: IHeadingOptions;
}

interface IHeadingData {
    headingText: string;
    id?: string;
}

interface IHeadingEvents {
    onClick?:() => void;
}

export interface IHeadingOptions {
    style?: 'italics' | 'normal' | 'oblique';
    weight?: 'normal' | 'small' | 'extrasmall' | 'bold' | 'extrabold';
    size?: 'normal' | 'small' | 'extrasmall' | 'large' | 'extralarge';
    headingColor?: string;
    animationType?: AnimationType;
}