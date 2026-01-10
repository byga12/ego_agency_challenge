import { CarDetail, CarMin } from "../types/cars";

const API_URL = process.env.API_URL

export const getCars = async (): Promise<CarMin[]> => {
    const res = await fetch(`${API_URL}/models`)
    if (!res.ok) {
        throw new Error(`Error al obtener modelos: ${res.statusText}`);
    }
    const body = await res.json()
    return body;
}

export const getCarById = async (id: number): Promise<CarDetail> => {
    const res = await fetch(`${API_URL}/models/${id}`)
    if (!res.ok) {
        if (res.status === 404) throw new Error("Auto no encontrado");
        throw new Error("Error al obtener el detalle del auto");
    }
    const body = await res.json()
    return body
}