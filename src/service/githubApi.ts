import { BASE_URL } from "../config/api";

export const searchProjects = async(perPage:string, sort:string, direction:string) => {
    const response = await fetch(`${BASE_URL}?per_page=${perPage}&sort=${sort}&direction=${direction}`)
    return response;
}