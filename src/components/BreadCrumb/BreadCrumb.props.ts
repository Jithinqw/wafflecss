export interface IBreadCrumbProps {
    data: IBreadCrumbData[];
    events?: IBreadCrumbEvents;
}

interface IBreadCrumbData {
    displayText: string;
}

interface IBreadCrumbEvents {
    onClick?:() => void;
}


