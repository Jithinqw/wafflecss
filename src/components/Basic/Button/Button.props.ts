export interface IButtonProps {
    data: IButtonData;
    events?: IButtonEvents;
    options?: IButtonOptions
}

interface IButtonData {
    displayText: string;
    id?: string;
    isDisabled?: boolean;
    radius?: string;
    fontWeight?: string;
    width?: string;
}

interface IButtonEvents {
    onClick(): void;
    onFocus(): void;
}

interface IButtonOptions {
    size?: 'xs' | 'sm' | 'md' | 'lg';
    buttonType?: 'button' | 'submit' | 'reset';
    variants?: 'default' | 'danger' | 'outline' | 'primary';
}