import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect } from 'react'
import { Redirect } from 'react-router';
import { RootStoreContext } from '~/stores/rootStore'
import { history } from '../router/Router';

interface IScreenProps {
    children: JSX.Element | JSX.Element[] | null;
}

const AuthenticatedScreen: React.FC<IScreenProps> = ({ children }) => {
    const { authStore } = useContext(RootStoreContext);

    if (!authStore.isLoggedIn) {
        return <Redirect to='/login' />

    }
    return (
        <>{children}</>
    )
}

export default observer(AuthenticatedScreen);
