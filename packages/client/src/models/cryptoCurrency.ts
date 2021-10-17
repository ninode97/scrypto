import { IPartner } from './partner'

export interface ICryptoCurrency {
  id: 'string'
  displayName: 'string'
  shortName: 'string'
  published_at: 'string'
  created_by: 'string'
  updated_by: 'string'
}

export interface ICryptoCurrencyPartners extends ICryptoCurrency {
  partners: IPartner[]
}
