import { useEffect, useState } from "react";

const useHash = ():string => {
    const [hash, setHash] = useState('');

    useEffect(() => {
        const inteHash = (Math.random() + 1).toString(36).substring(2);
        setHash(inteHash);
    }, []);
    
    return hash;
}

export default useHash;
