export default interface IBadgeProps {
    data: IBadgeData;
    options?: IBadgeOptions;
    events?: IBadgeEvents;
}

interface IBadgeData {
    displayText: string;
    background?: string;
}

interface IBadgeEvents {
    onClick?:() => void;
}

interface IBadgeOptions {
    variant: 'subtle' | 'solid' | 'outline';
    color: 'warn' | 'success' | 'danger';
}