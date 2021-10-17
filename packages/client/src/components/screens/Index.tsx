import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { Redirect, useHistory } from 'react-router'
import { SignInButton } from '~/components/domain/auth/SignInButton'
import { SignOutButton } from '~/components/domain/auth/SignOutButton'
import { Head } from '~/components/shared/Head'
import { RootStoreContext } from '~/stores/rootStore'
import LinkCard from '../domain/dashboard/LinkCard'
import LinkCards from '../domain/dashboard/LinkCards'
import { history } from '../router/Router'
import AuthenticatedScreen from './AuthenticatedScreen'

function Index() {
  const history = useHistory();
  return (
    <AuthenticatedScreen>
      <Head title="Dashboard" />
      <LinkCards>
        <LinkCard
          title="Enterprise"
          image="/company.png"
          description="Discover large capital companies that supports cryptocurrencies"
          label="Companies"
          action={() => {
            history.push('/companies')
          }}
        />
        <LinkCard
          title="Currencies"
          image="/currency.jpg"
          description="Discover crypto currencies which are being tracked"
          label="View"
          action={() => {
            history.push('/currencies')
          }}
        />
        <LinkCard />
        <LinkCard />
        <LinkCard />
        <LinkCard />
      </LinkCards>
    </AuthenticatedScreen>
  )
}

export default observer(Index)
