import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect } from 'react'
import { RootStoreContext } from '~/stores/rootStore'
import AuthenticatedScreen from './AuthenticatedScreen'

const Companies = () => {
  const { partnerStore } = useContext(RootStoreContext)
  const { isLoadingPartners, partners, list } = partnerStore

  useEffect(() => {
    list()
  }, [list])

  return (
    <AuthenticatedScreen>
      <div className="bg-neutral text-accent-content h-full">
        {isLoadingPartners ? (
          <div>Loading....</div>
        ) : (
          partners.map(partner => {
            return <div>Company</div>
          })
        )}
      </div>
    </AuthenticatedScreen>
  )
}

export default observer(Companies)
