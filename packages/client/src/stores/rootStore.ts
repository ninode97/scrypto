import { createContext } from "react";
import { configure } from "mobx";
import CommonStore from "./commonStore";
import AuthStore from "./authStore";

configure({ enforceActions: "always", });


export class RootStore {
  commonStore: CommonStore;
  authStore: AuthStore;

  constructor() {
    this.commonStore = new CommonStore(this);
    this.authStore = new AuthStore(this);

  }
}

export const RootStoreContext = createContext(new RootStore());