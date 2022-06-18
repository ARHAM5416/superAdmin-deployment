import { get } from '../services/apiServices'
import { userEndPoints } from '../configuration/config';
import { getCookiesData } from '../services/cookie'
//var id = getCookiesData()
// console.log("tokentoken", token)
//axios.defaults.headers.common['Authorization'] = JSON.stringify(id)

export function getUserDetail(id) {
    const apiResponse = get(process.env.NEXT_PUBLIC_APP_HOST + 'users/id/' + id);
    console.log("apiResponseapiResponse", apiResponse.data)
    return apiResponse.data.data;
}