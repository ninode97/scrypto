
import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { Redirect } from 'react-router'
import { SignInButton } from '~/components/domain/auth/SignInButton'
import { SignOutButton } from '~/components/domain/auth/SignOutButton'
import { Head } from '~/components/shared/Head'
import { RootStoreContext } from '~/stores/rootStore'
import { history } from '../router/Router'
import AuthenticatedScreen from './AuthenticatedScreen'

function Index() {
  return (
    <AuthenticatedScreen>
      <Head title="Dashboard" />
      <div>Hello World1!</div>
    </AuthenticatedScreen>
  )
}

export default observer(Index)
