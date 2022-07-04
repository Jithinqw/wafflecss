export interface IAvatarProps {
    data: IAvatarData;
    events?: IAvatarEvents;
    options?: IAvatarOptions;
}

interface IAvatarData {
    imageSrc: string;
    height?: string;
    width?: string;
    alt?: string;
    borderColor?: string;
}

interface IAvatarEvents {
    onClick?:() => void;
    onLoad?:() => void;
}

interface IAvatarOptions {
    avatarType: 'rounded' | 'rect' | 'bordered'
}