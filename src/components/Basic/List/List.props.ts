import { ListData } from "../../../models/basicModal";

export interface IListProps {
    data: IListData;
    options: IListOptions;
}

interface IListData {
    /**
     * @type {Array<ListData>}
     */
    listData: ListData[];
}

interface IListOptions {
    /**
     * List type ol or ul
     * list to render
     * @type {string}
     */
    listType?: 'ordered' | 'unordered';
    /**
     * A spacing required 
     * for each list
     * @type {string}
     */
    spacing?: string;
    /**
     * @type {string}
     */
    className?: string;
}