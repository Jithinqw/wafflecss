import React from "react";

export interface ITableProps {
    data: ITableData;
    options?: ITableOptions;
}

export interface ITableData {
    tableHead: Array<ITableTitleData>;
    tableRowData: Array<ITableRow>;
}

export interface ITableTitleData {
    /**
     * @type {string | React.ReactNode}
     */
    tableTitle: string | React.ReactNode;
}

export interface ITableRow {
    /**
     * @type {string | React.ReactNode}
     */
    tableRow: string | React.ReactNode;
}

interface ITableOptions {
    /**
     * @type {string}
     * HTML ID for table component
     */
    id?: string;
    /**
     * @type {string}
     * additional CSS classnames
     */
    className?: string;
    /**
     * @type {string}
     */
    color?: string;
    /**
     * @type {light | dark}
     */
    type?: 'light'| 'dark';
}