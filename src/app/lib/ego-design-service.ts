const API_URL = process.env.API_URL

export const getCars = async (): Promise<string> => {
    const res = await fetch(`${API_URL}/models`)
    const body = await res.json()
    console.log(body);
    
    return ""
}

export const getCarById = async (id: number): Promise<string> => {
    const res = await fetch(`${API_URL}/models/${id}`)
    const body = await res.json()
    console.log(body);
    return ""
}