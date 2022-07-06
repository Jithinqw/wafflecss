import React from "react";

export interface IQuoteProps {
    /**
     * @type {React.ReactNode}
     */
    displayNode: React.ReactNode;
    /**
     * @type {string}
     */
    bgColor?: string;
    /**
     * @type {string}
     */
    highlightColor?: string;
}