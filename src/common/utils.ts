
/**
 * @class Utilities
 * @description Container for common methods
 */
 export default class Utilities {
    /**
     * @static isEmpty
     * @description Checks if string is empty
     * @param value {string}
     * @return {boolean}
     **/
    static isEmpty = (value: string):boolean => {
        // eslint-disable-line
        return (value === null || typeof value === 'undefined' || value === '');
    }

    /**
     * @static isEmptyObject
     * @description Checks if object is empty
     * @param obj T 
     * @returns boolean
     **/ 
    static isEmptyObject<T>(obj: T):boolean {
        return (obj === null
        || typeof obj === 'undefined'
        || typeof obj !== 'object'
        || (Object.keys(obj).length === 0));
    }

    /**
     * @static combineStyleArray
     * @description Combine style array
     * @param styleArray T
     * @returns string
     */ 
    static combineStyleArray(styleArray:Array<string>):string {
        return styleArray.join(' ');
    }

    /**
     * @static generateRandomString
     * @todo Remove this method
     * @description Generates random string
     * @returns string
     */
    static generateRandomString = (): string => {
        return Math.random().toString(36).substr(2, 5);
    }

    /**
     * @static resolveIconSize
     * @description Resolve fontawesome icon size
     * @returns {string}
     */
    static resolveIconSize = ():string => {
        const windowResolve = window.innerWidth;
        if (windowResolve >= 600 && windowResolve <= 768) {
            return 'lg'
        }
        return 'sm';
    }
}