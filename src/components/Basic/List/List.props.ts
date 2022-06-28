import { ListData } from "../../../models/basicModal";

export interface IListProps {
    data: IListData;
    options: IListOptions;
}

interface IListData {
    listData: ListData[];
}

interface IListOptions {
    listType?: 'ordered' | 'unordered';
}