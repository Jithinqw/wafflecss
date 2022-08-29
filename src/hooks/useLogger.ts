import { useEffect, useState } from 'react';
import { errorColor } from '../utils/constants';

export function useLogger(props: any[], level?:number) {
    const [timeStamp, setTimeStamp] = useState('');

    useEffect(() => {
        const currentDate: Date = new Date();
        const currentYear: string = `${currentDate.getUTCFullYear()}`;
        const month: string = `${currentDate.getUTCMonth() + 1}`;
        const day: string = `${currentDate.getUTCHours()}`;
        const hours: string = `${currentDate.getUTCHours()}`;
        const minutes: string = `${currentDate.getUTCMinutes()}`;
        const seconds: string = `${currentDate.getUTCSeconds()}`;
        const date: string = `${currentYear}-${month}-${day}`;
        const tempTimeStamp: string = `${hours}:${minutes}:${seconds}`;
        
        setTimeStamp(`${date}--${tempTimeStamp}`);
        switch(level) {
            case 0:
                console.log(
                    `${errorColor.bgWhite}
                    ${timeStamp}
                    ${props}
                    `
                );
            break;
            case 1:
                console.log(
                    `${errorColor.bgBlue}
                    ${timeStamp}
                    ${props}
                    `
                );
            break;
            case 2:
                console.log(
                    `${errorColor.bgYellow}
                    ${timeStamp}
                    ${props}
                    `
                );
            break;
            case 3:
                console.log(
                    `${errorColor.bgRed}
                    ${timeStamp}
                    ${props}
                    `
                );
            break;
            default:
                console.log(
                    `${errorColor.bgBlue}
                    ${timeStamp}
                    ${props}
                    `
                );
            break;
        }
    }, []);
    
    return null;
}