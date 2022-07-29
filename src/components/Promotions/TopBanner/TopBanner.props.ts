export interface ITopBannerProps {
    data: ITopBannerData;
    events?: ITopBannerEvents;
    options?: ITopBannerOptions;
}

interface ITopBannerData {
    /**
     * @type {string}
     * Display text for display
     */
    displayText: string;
}

interface ITopBannerEvents {
    /**
     * @type {Function}
     */
    onClick?:() => void;
}

interface ITopBannerOptions {
    /**
     * @type {'danger' | 'info' | 'success' | 'warning'}
     */
    bannerType: 'danger' | 'info' | 'success' | 'warning';
}