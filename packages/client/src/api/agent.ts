import axios, { AxiosRequestHeaders, AxiosResponse } from 'axios'
import { ILoginForm, ILoginResponse } from '~/models/auth'
import { IPartnerCryptoCurrencies } from '~/models/partner'
import { IUser } from '~/models/user'

const env: ImportMetaEnv = import.meta.env

axios.defaults.baseURL = env.VITE_STRAPI_URL
axios.interceptors.request.use(
  config => {
    const token = window.localStorage.getItem('accessToken')
    if (token && config?.headers) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  },
)
axios.interceptors.response.use(undefined, error => {
  if (error.message === 'Network Error' && !error.response) {
    // toast.error("Network error - make sure API is running!");
    throw error
  }
  const { status } = error.response

  if (status === 500) {
    // toast.error("Server error - check the terminal for more info!");
  }
  throw error.response
})

const responseBody = (response: AxiosResponse) => response.data

class Agent {
  mapBody<T>(response: AxiosResponse<T>) {
    return response.data as T
  }

  getWithHeaders<T>(url: string, headers: AxiosRequestHeaders) {
    return axios
      .get<T>(url, {
        headers,
      })
      .then(this.mapBody)
  }

  get<T>(url: string) {
    return axios.get<T>(url).then(this.mapBody)
  }

  post<T>(url: string, body: object) {
    return axios.post<T>(url, body).then(this.mapBody)
  }
}

const agent = new Agent()

const Auth = {
  login: (url: string, body = {}): Promise<ILoginResponse> => agent.post<ILoginResponse>(url, body),
  me: (jwt: string): Promise<IUser> =>
    agent.getWithHeaders('/users/me', {
      Authorization: `Bearer ${jwt}`,
    }),
}

const Companies = {
  list: (): Promise<IPartnerCryptoCurrencies[]> => agent.get<IPartnerCryptoCurrencies[]>('/partners'),
}

const requests = {
  Auth,
  Companies,
}

export default requests
