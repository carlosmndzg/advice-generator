const API_URL = 'https://api.adviceslip.com/advice'

export const getAdvice = async () => {
    const res = await fetch(API_URL)
    const data = await res.json()

    return data
}
