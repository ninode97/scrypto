import { observer } from 'mobx-react-lite'
import React, { lazy, useContext, useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { RootStoreContext } from '~/stores/rootStore'
import Navigation from '../domain/navigation/Navigation'

const IndexScreen = lazy(() => import('~/components/screens/Index'))
const Page404Screen = lazy(() => import('~/components/screens/404'))
const Login = lazy(() => import('~/components/screens/Login'))
const Companies = lazy(() => import('~/components/screens/Companies'))

const Routes = () => {
  return (
    <>
      <div className="container mx-auto">
        <Navigation />
        <Switch>
          <Route exact path="/" component={IndexScreen} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/companies" component={Companies} />

          <Route path="*" component={Page404Screen} />
        </Switch>
      </div>
    </>
  )
}

export default observer(Routes)
