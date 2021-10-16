import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { HelmetProvider } from "react-helmet-async";
import Main from "~/components/root/Main";
import { RootStoreContext } from "~/stores/rootStore";

export const App = observer(() => {
  const { authStore } = useContext(RootStoreContext);
  

  return (
    <HelmetProvider>
      <Main />
    </HelmetProvider>
  )
});
