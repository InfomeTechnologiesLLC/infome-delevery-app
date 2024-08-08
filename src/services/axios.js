import axios from 'axios';
import toast from "react-hot-toast";

export class HttpError extends Error {
    constructor(message) {
        console.log(message);

        super(message) // 'Error' breaks prototype chain here
        this.name = 'HttpError'
        Object.setPrototypeOf(this, new.target.prototype) // restore prototype chain
    }
}


const Api = axios.create({
    baseURL: 'https://crm.infoeventz.com/api/',
});

Api.interceptors.request.use((config) => {
    const token = localStorage.getItem('access-token')
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
},
    (error) => Promise.reject(error)
)

Api.interceptors.response.use((res) => {
    console.log(res.status);

    if (res.status == 200) {
        return res
    }

}, (err) => {
    const status = err?.response?.status || null;
    // if unauthorized redirect to login page
    console.log(window.location.pathname);

    if (status === 401 && window.location.pathname != '/login') {
        console.log(status);

        window.location.href = '/login'
        toast("please login to continue", { icon: "⚠️" })

        // await store.dispatch(logout());
        // await store.dispatch(reset());
        // toast.info('Your session has expired. Please login');

    }
    // console.log('thowing error');
    // throw new HttpError('API Error! Invalid status code!')

    return Promise.reject(err);
    // return httpErrorHandler()
})

export default Api