import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router'
import { Redirect } from 'react-router-dom'
import { RootStoreContext } from '~/stores/rootStore'
import { Head } from '../shared/Head'

const Login = () => {
  const { authStore } = useContext(RootStoreContext)
  const { setEmail, setPassword, login, user, current } = authStore

  useEffect(() => {
    const accessToken = window.localStorage.getItem('accessToken')
    if (accessToken) {
      current(accessToken);
    }
  }, [])

  if (user) {
    return <Redirect to="/" />
  }

  return (
    <>
      <Head title="Login" />
      <div className="h-screen flex justify-center items-center bg-gray-100">
        <form onSubmit={login} className="p-10 bg-white rounded flex justify-center items-center flex-col shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-20 h-20 text-gray-600 mb-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
              clipRule="evenodd"
            />
          </svg>
          <p className="mb-5 text-3xl uppercase text-gray-600">Login</p>
          <input
            onChange={setEmail}
            type="email"
            name="email"
            className="mb-5 p-3 w-80 focus:border-blue-700 rounded border-2 outline-none"
            autoComplete="off"
            placeholder="Email"
            required
          />
          <input
            onChange={setPassword}
            type="password"
            name="password"
            className="mb-5 p-3 w-80 focus:border-blue-700 rounded border-2 outline-none"
            autoComplete="off"
            placeholder="Password"
            required
          />
          <button
            className="bg-blue-600 hover:bg-blue-900 text-white font-bold p-2 rounded w-80"
            id="login"
            type="submit"
          >
            <span>Login</span>
          </button>
        </form>
      </div>
    </>
  )
}

export default observer(Login)
