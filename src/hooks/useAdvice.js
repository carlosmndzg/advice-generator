import { getAdvice } from '../services/advice'
import { useState, useEffect } from 'react'

export const useAdvice = () => {
    const [advice, setAdvice] = useState(null)

    useEffect(() => {
        newAdvice()
    }, [])

    const newAdvice = () => {
        getAdvice().then((advice) => setAdvice(advice))
    }

    return { advice, newAdvice }
}
