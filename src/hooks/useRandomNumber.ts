import { useEffect, useState } from 'react'

const useRandomNumber = (min: number, max: number) => {
    const [randomNum, setRandomNum] = useState(0)

    useEffect(() => {
        const rand = Math.floor(Math.random() * (max - min + 1) + min)
        setRandomNum(rand)
    }, [])

    return randomNum
}

export default useRandomNumber
