
import axios from 'axios';
import { BASE_URL, END_POINTS } from './constants';

const AXIOS = axios.create({
    baseURL: BASE_URL,
})
// axios.defaults.baseURL = BASE_URL

export const getMovie = async () => {
    try {
        const res = await AXIOS.get(END_POINTS.getMovie)
        return res
    } catch (e) {
        console.log(e)
        return "Error has occured"
    }
}

export const searchMovie = async (keyword) => {
    if (!keyword) {
        console.log("There is no matching keyword")
        return
    }
    try {
        const res = await AXIOS.get(keyword)
        return res;
    } catch (e) {
        console.log(e)
        return "Error has occured";
    }
} 
