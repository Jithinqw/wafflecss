import { useEffect, useState } from "react";

/**
 * @function useColor
 * @returns {string}
 */
const useColor = ():string => {
    const [color, setColor] = useState('');

    useEffect(() => {
        const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        setColor(randomColor);
    }, []);

    return color;
}

export default useColor;
