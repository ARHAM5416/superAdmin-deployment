import Cookies from 'js-cookie';

export function getCookiesData() {
    var token = Cookies.get('token', { path: '/' })
    if (token && token !== undefined) {
        return token
    }
}


export function setCookiesData(token) {
    Cookies.set('token', token, { path: '/' })
}


export function removeCookiesData() {
    Cookies.remove('token', { path: '/' })
}