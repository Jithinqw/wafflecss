import { errorColor } from './constants'

/**
 * @class Logger
 * @description Experimental class
 * for internal Logging.
 */
export default class Logger {
    static LOG_LEVEL = 3

    /**
     * @function Error
     * @param {Array<string>} args
     * @returns {void}
     */
    static Error(args: [string, any][]): void {
        if (typeof window === 'undefined') {
            console.log(`${errorColor.bgRed} ${Logger.getTimeStamp()}`, ...args)
            return
        }
        console.log(`${errorColor.bgRed} ${Logger.getTimeStamp()}`, ...args)
    }

    /**
     * @function Error
     * @param {Array<string>} args
     * @returns {void}
     */
    static Warn(args: [string, any][]): void {
        if (typeof window === 'undefined') {
            console.log(
                `${errorColor.bgYellow} ${Logger.getTimeStamp()}`,
                ...args,
            )
            return
        }
        console.log(`${errorColor.bgYellow} ${Logger.getTimeStamp()}`, ...args)
    }

    /**
     * @function Error
     * @param {Array<string>} args
     * @returns {void}
     */
    static Info(args: [string, any][]): void {
        if (typeof window === 'undefined') {
            console.log(
                `${errorColor.bgBlue} ${Logger.getTimeStamp()}`,
                ...args,
            )
            return
        }
        console.log(`${errorColor.bgBlue} ${Logger.getTimeStamp()}`, ...args)
    }

    /**
     * @function Error
     * @param {Array<string>} args
     * @returns {void}
     */
    static Debug(args: [string, any][]): void {
        if (typeof window === 'undefined') {
            console.log(
                `${errorColor.bgWhite} ${Logger.getTimeStamp()}`,
                ...args,
            )
            return
        }
        console.log(`${errorColor.bgWhite} ${Logger.getTimeStamp()}`, ...args)
    }

    /**
     * @function getTimeStamp
     * @returns {string}
     */
    static getTimeStamp(): string {
        const currentDate: Date = new Date()
        const currentYear: string = `${currentDate.getUTCFullYear()}`
        const month: string = `${currentDate.getUTCMonth() + 1}`
        const day: string = `${currentDate.getUTCHours()}`
        const hours: string = `${currentDate.getUTCHours()}`
        const minutes: string = `${currentDate.getUTCMinutes()}`
        const seconds: string = `${currentDate.getUTCSeconds()}`

        const date: string = `${currentYear}-${month}-${day}`
        const timeStamp: string = `${hours}:${minutes}:${seconds}`
        return `${date}--${timeStamp}`
    }

    /**
     * @function displayLogs
     * @param {Array<string>}args
     * @param {number} errorLevel
     * @param errorLevel
     */
    static displayLogs(args: [string, any][], errorLevel: number) {
        switch (errorLevel) {
            case 0:
                Logger.Debug(args)
                break
            case 1:
                Logger.Error(args)
                break
            case 2:
                Logger.Warn(args)
                break
            case 3:
                Logger.Debug(args)
            default:
                Logger.Debug(args)
                break
        }
    }
}
