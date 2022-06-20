export interface IButtonProps {
    data: IButtonData;
    events?: IButtonEvents;
    options?: IButtonOptions
}

interface IButtonData {
    displayText: string;
    color?: string;
    isDisabled?: boolean;
    background?: string;
}

interface IButtonEvents {
    onClick(): void;
}

interface IButtonOptions {
    size?: 'xs' | 'sm' | 'md' | 'lg';
    buttonType: 'button' | 'submit';
    variants?: 'solid' | 'ghost' | 'outline' | 'link';
}