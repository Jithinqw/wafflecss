import { useEffect, useState } from "react";

/**
 * @function useisInternetConnected
 * @description Check if internet is connected.
 * By default calls google if no URL is passed.
 * @param {string} url 
 * @param {any} options 
 * @returns {[boolean, (url: string, options?: any) => void]}
 */
export const useisInternetConnected = (url?: string, options?: any): [boolean, (url: string, options?: any) => void] => {
    const DEFAULT_URL = 'https://google.com/';

    const [status, setStatus] = useState<{
        loading: boolean;
        error?: Error;
        connected: boolean;
        data?: any;
    }>({
        connected: false,
        loading: false,
    });

    const fetchNow = (url: string, options?: any) => {
        setStatus({ 
            loading: true, 
            connected: false 
        });
        fetch(url, options)
        .then((res: any) => res.json())
        .then((res: any) => {
            setStatus({ 
                loading: false, 
                connected: true 
            });
        }).catch((error: Error) => {
            setStatus({ 
                loading: false,
                connected: false 
            });
        });
      }
    
    useEffect(() => {
        if(url) {
            fetchNow(url, options);
        } else {
            fetchNow(DEFAULT_URL);
        }
    }, []);
    
    return [status.connected, fetchNow];
}