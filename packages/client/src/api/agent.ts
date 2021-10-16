
import axios, { AxiosResponse } from "axios";
import { ILoginForm, ILoginResponse } from "~/models/auth";


const env: ImportMetaEnv = import.meta.env;


axios.defaults.baseURL = env.VITE_STRAPI_URL;
axios.interceptors.request.use(
    (config) => {
        // const token = window.localStorage.getItem("accessToken");
        // if (token) config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
axios.interceptors.response.use(undefined, (error) => {
    if (error.message === "Network Error" && !error.response) {
        // toast.error("Network error - make sure API is running!");
        throw error;
    }
    const { status } = error.response;

    if (status === 500) {
        // toast.error("Server error - check the terminal for more info!");
    }
    throw error.response;
});


const responseBody = (response: AxiosResponse) => response.data;

class Agent {
    mapBody<T>(response: AxiosResponse<T>) {
        return (response.data as T);
    }
    post<T>(url: string, body: object) {
        return axios.post<T>(url, body).then(this.mapBody)
    }
}
// const agent = {
//     get: (url: string) => axios.get(url).then(responseBody),
//     getWithParams: (url: string, params: any) =>
//         axios.get(url, { params }).then(responseBody),
//     post<T>: (url: string, body: {}) => axios.post(url, body).then(responseBody),
//     put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
//     del: (url: string) => axios.delete(url).then(responseBody),
//     postForm: (url: string, file: Blob) => {
//         let formData = new FormData();
//         formData.append("File", file);
//         return axios
//             .post(url, formData, {
//                 headers: { "Content-type": "multipart/form-data" },
//             })
//             .then(responseBody);
//     },
// };

const agent = new Agent();

const Auth = {
    login: (url: string, body = {}): Promise<ILoginResponse> => agent.post<ILoginResponse>(url, body)
}



const requests = {
    Auth
}

export default requests;