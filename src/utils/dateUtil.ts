export default class DateUtilities {

    static getCurrentDate = () => {
        return new Date();
    }

    static getNextTenYears = (thisYear: string) => {

    }

    /**
     * @function isLeap
     * @param {number} year 
     */
    static isLeap = (year: number) => {
        return new Date(year, 1, 29).getDate() === 29;
    }

    static getNumberOfDays = (month: number, year: number) => {
        
    }
}