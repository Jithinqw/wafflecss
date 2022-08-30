import { useEffect, useState } from 'react'

const useDateDiff = (futureDate: string): string => {
    const [timeDiff, setTimeDiff] = useState('')

    useEffect(() => {
        const currentDate: Date = new Date(futureDate)
        const currentYear: string = `${currentDate.getUTCFullYear()}`
        const month: string = `${currentDate.getUTCMonth() + 1}`
        const day: string = `${currentDate.getUTCHours()}`
        const hours: string = `${currentDate.getUTCHours()}`
        const minutes: string = `${currentDate.getUTCMinutes()}`
        const seconds: string = `${currentDate.getUTCSeconds()}`
        const date: string = `${currentYear}-${month}-${day}`
        const timeStamp: string = `${hours}:${minutes}:${seconds}`
        setTimeDiff(`${date}--${timeStamp}`)
    }, [])

    return timeDiff
}

export default useDateDiff
