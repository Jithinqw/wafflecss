export interface IAvatarProps {
    data: IAvatarData;
    events?: IAvatarEvents;
    options?: IAvatarOptions;
}

interface IAvatarData {
    imageSrc: string;
    height?: string;
    weight?: string;
}

interface IAvatarEvents {
    onClick?:() => void;
}

interface IAvatarOptions {
    avatarType: 'rounded' | 'rect' | 'bordered'
}