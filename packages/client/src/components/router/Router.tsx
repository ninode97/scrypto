import { lazy, Suspense, useContext, useEffect } from "react";
import { Router as  ReactRouter, Route, Switch, useHistory } from "react-router-dom";
import { RootStoreContext } from "~/stores/rootStore";
import { createBrowserHistory } from "history";
import Routes from "./Routes";



export const history = createBrowserHistory();

const Loading = () => (
  <p className="p-4 w-full h-full text-center">
    Loading...
  </p>
);




export const Router = () => {
  return (
    <ReactRouter history={history}>
      <Suspense fallback={<Loading />}>
        <Routes />
      </Suspense>
    </ReactRouter>
  )
};


