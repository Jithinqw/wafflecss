export interface IButtonProps {
    data: IButtonData;
    events?: IButtonEvents;
    options?: IButtonOptions
}

interface IButtonData {
    displayText: string;
    isDisabled?: boolean;
    radius?: string;
    fontWeight?: string;
    width?: string;
}

interface IButtonEvents {
    onClick(): void;
}

interface IButtonOptions {
    size?: 'xs' | 'sm' | 'md' | 'lg';
    buttonType: 'button' | 'submit';
    variants?: 'default' | 'danger' | 'outline';
}