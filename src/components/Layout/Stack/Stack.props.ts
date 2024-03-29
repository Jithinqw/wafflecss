import React from "react";

export interface IStackProps {
    /**
     * @type {React.ReactNode}
     */
    children?: React.ReactNode;
    /**
     * @type {string}
     */
    id?: string;
    /**
     * @type {'center' | 'stretch' | 'flex-start' | 'flex-end'}
     */
    align?: 'center' | 'stretch' | 'flex-start' | 'flex-end';
    /**
     * @type {'center' | 'flexStart' | 'flex-end' | 'space-between' | 'space-around'}
     */
    justify?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around';
    /**
     * @type {string}
     */
    className?: string;
    /**
     * @type {string}
     */
    gap?: string;
}