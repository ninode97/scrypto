import { RootStore } from './rootStore'
import { observable, action, reaction, computed, runInAction, makeAutoObservable } from 'mobx'
import requests from '~/api/agent'
import { IUser } from '~/models/user'
import { history } from '~/components/router/Router'

export default class AuthStore {
  rootStore: RootStore
  constructor(rootStore: RootStore) {
    makeAutoObservable(this)
    this.rootStore = rootStore
  }

  @observable jwt = ''
  @observable email = ''
  @observable password = ''
  @observable user?: IUser
  @observable isLoading = true;

  @computed get loginPayload() {
    return {
      identifier: this.email,
      password: this.password,
    }
  }

  @computed get isLoggedIn() {
    return this.jwt && this.user
  }

  @action setEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.email = e.target.value
  }

  @action setPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.password = e.target.value
  }

  @action login = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      console.log(this.loginPayload)
      const data = await requests.Auth.login('/auth/local', this.loginPayload)
      window.localStorage.setItem('accessToken', data.jwt)
      runInAction(() => {
        this.jwt = data.jwt
        this.user = data.user
      })
      return this.user
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  @action logout = () => {
    alert('logout')
  }

  @action current = async (jwt: string) => {
    try {
      const data = await requests.Auth.me(jwt)
      runInAction(() => {
        this.jwt = jwt
        this.user = data
      })
      return data
    } catch (error) {
      localStorage.removeItem('accessToken')
      console.log(error)
      throw error
    }
  }
}
