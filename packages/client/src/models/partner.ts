import { ICryptoCurrency } from './cryptoCurrency'

export interface IPartner {
  id: string
  name: string
  published_at: Date
}

export interface IPartnerCryptoCurrencies extends IPartner {
  cryptocurrencies: ICryptoCurrency[]
}
