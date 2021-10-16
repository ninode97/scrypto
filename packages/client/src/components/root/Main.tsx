import { Router } from "~/components/router/Router";
import { useEffect } from "react";

function Main() {
  useEffect(() => {
    // setupFirebase();

    // const auth = getAuth();

    // onAuthStateChanged(auth, (user) => {
    //   if (user) {
    //     signIn(user);
    //   } else {
    //     signOut();
    //   }
    // });
  }, []);
  return (
    <main>
      <Router />
    </main>
  );
}

export default Main;
