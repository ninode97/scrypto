export interface ISingleImage {
  id: number
  name: string
  alternativeText: string
  caption: string
  width: number
  height: number
  formats: {
    thumbnail: {
      name: string
      hash: string
      ext: string
      mime: string
      width: number
      height: number
      size: number
      path: null
      url: string
    }
    small: {
      name: string
      hash: string
      ext: string
      mime: string
      width: number
      height: number
      size: number
      path: null
      url: string
    }
  }
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: null
  provider: string
  provider_metadata: null
  created_at: Date
  updated_at: Date
}
