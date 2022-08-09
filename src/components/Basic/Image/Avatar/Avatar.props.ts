export interface IAvatarProps {
    data: IAvatarData;
    events?: IAvatarEvents;
    options?: IAvatarOptions;
}

interface IAvatarData {
    /**
     * @type {string}
     * image URL for avatar
     */
    imageSrc: string;
    /**
     * @type {string}
     * height for avatar
     */
    height?: string;
    /**
     * @type {string}
     * width for avatar
     */
    width?: string;
    /**
     * @type {string}
     * a alt for avatar
     */
    alt?: string;
    /**
     * @type {string}
     * a border color for avatar
     */
    borderColor?: string;
    /**
     * @type {string}
     * avatar text data
     */
    avatarText?: string;
}

interface IAvatarEvents {
    /**
     * Trigger an event on image click
     */
    onClick?:() => void;
    /**
     * Trigger an event on image load
     */
    onLoad?:() => void;
}

interface IAvatarOptions {
    /**
     * @type {'rounded' | 'rect' | 'bordered'}
     * Render an avatar variant
     * @default {'rounded'}
     */
    avatarType: 'rounded' | 'rect' | 'bordered' | 'text';
    /**
     * additional styles passed
     */
    className?: string;
}