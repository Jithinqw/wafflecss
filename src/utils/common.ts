/**
 * @class Utilities
 * @description Container for all common methods.
 */
export default class Utilities {
    /**
     * @function isEmpty
     * @static
     * @description Checks if string is empty
     * @param {string} value
     * @return {boolean}
     **/
    static isEmpty = (value: string):boolean => {
        // eslint-disable-line
        return (value === null || 
            typeof value === 'undefined' || 
            value === ''
        );
    }

    /**
     * @function isEmptyObject
     * @static
     * @description Checks if object is empty
     * @param {T} obj
     * @returns {boolean}
     **/ 
    static isEmptyObject<T>(obj: T):boolean {
        return (obj === null
        || typeof obj === 'undefined'
        || typeof obj !== 'object'
        || (Object.keys(obj).length === 0));
    }

    /**
     * @function combineStyleArray
     * @static
     * @description Combine style array
     * @param {T} styleArray
     * @returns {string}
     */ 
    static combineStyleArray(styleArray:Array<string>):string {
        return styleArray.join(' ');
    }

    /**
     * @function generateRandomString
     * @static
     * @todo Remove this method
     * @description Generates random string
     * @returns {string}
     */
    static generateRandomString = (): string => {
        return Math.random().toString(36).substr(2, 5);
    }
}