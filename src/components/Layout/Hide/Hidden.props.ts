import React from "react";

export interface IHiddenProps {
    data: IHiddenData;
    options?: IHiddenOptions;
}

interface IHiddenData {
    /**
     * React Node who wants to
     * stay hidden
     */
    children: React.ReactNode;    
}

interface IHiddenOptions {
    /**
     * type of hidden to be applied
     * @type {sr} == hidden but visible to screen reader
     * @type {none-sr} == not hidden visually but hidden to screen reader
     * @type {hidden} == hidden to visually and to screen readers
     */
    type?: 'sr' | 'none-sr' | 'hidden';
}

