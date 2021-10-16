import { observer } from 'mobx-react-lite'
import React, { lazy, useContext, useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { RootStoreContext } from '~/stores/rootStore'
import Login from '../screens/Login'
const IndexScreen = lazy(() => import('~/components/screens/Index'))
const Page404Screen = lazy(() => import('~/components/screens/404'))

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <IndexScreen />
            </Route>
            <Route exact path="/login">
                <Login />
            </Route>
            <Route path="*">
                <Page404Screen />
            </Route>
        </Switch>
    )
}

export default observer(Routes)
