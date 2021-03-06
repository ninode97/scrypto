import { createContext } from 'react'
import { action, configure, makeAutoObservable, observable, runInAction } from 'mobx'
import CommonStore from './commonStore'
import AuthStore from './authStore'
import { RootStore } from './rootStore'
import requests from '~/api/agent'
import { IPartner, IPartnerCryptoCurrencies } from '~/models/partner'

export class PartnerStore {
  rootStore: RootStore

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
  }

  @observable partners: IPartnerCryptoCurrencies[] = []
  @observable isLoadingPartners = true

  @action list = async () => {
    try {
      const data = await requests.Companies.list()
      runInAction(() => {
        this.partners = data
        this.isLoadingPartners = false
      })
      return data
    } catch (error) {
      console.log(error)
      runInAction(() => {
        this.isLoadingPartners = false
      })
    }
  }

  @action showLogo = (partner: IPartner) => {
    var instanceURL = this.rootStore.commonStore.env.VITE_STRAPI_URL
    return partner.logo ? instanceURL + partner.logo.formats.small.url : '/company.png'
  }
}
