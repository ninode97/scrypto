import { ICryptoCurrency } from './cryptoCurrency'
import { ISingleImage } from './shared';

export interface IPartner {
  id: string
  name: string
  published_at: Date
  logo: ISingleImage
}

export interface IPartnerCryptoCurrencies extends IPartner {
  cryptocurrencies: ICryptoCurrency[]
}
