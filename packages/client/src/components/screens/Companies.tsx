import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect } from 'react'
import { RootStoreContext } from '~/stores/rootStore'
import AuthenticatedScreen from './AuthenticatedScreen'

const Companies = () => {
  const { partnerStore } = useContext(RootStoreContext)
  const { isLoadingPartners, partners, list, showLogo } = partnerStore

  useEffect(() => {
    list()
  }, [list])

  return (
    <AuthenticatedScreen>
      <div className="bg-neutral text-accent-content h-full">
        {isLoadingPartners ? (
          <div>Loading....</div>
        ) : (
          <section className="container mx-auto p-6 font-mono">
            <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
              <div className="w-full overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                      <th className="px-4 py-3">Name</th>
                      <th className="px-4 py-3">Supported Currencies</th>
                      <th className="px-4 py-3">Status</th>
                      <th className="px-4 py-3">Added At</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {partners.map(partner => {
                      return (
                        <tr className="text-gray-700">
                          <td className="px-4 py-3 border">
                            <div className="flex items-center text-sm">
                              <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                                <img
                                  className="object-cover w-full h-full rounded-full"
                                  src={showLogo(partner)}
                                  alt=""
                                  loading="lazy"
                                />
                                <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true" />
                              </div>
                              <div>
                                <p className="font-semibold text-black">{partner.name}</p>
                                <p className="text-xs text-gray-600">Enterprise</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-ms font-semibold border">{partner.cryptocurrencies.length}</td>
                          <td className="px-4 py-3 text-xs border">
                            <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                              {' '}
                              Acceptable{' '}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-sm border">{new Date(partner.published_at).toDateString()}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}
      </div>
    </AuthenticatedScreen>
  )
}

export default observer(Companies)
