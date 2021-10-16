import { createContext } from "react";
import { action, configure, makeAutoObservable } from "mobx";
import CommonStore from "./commonStore";
import AuthStore from "./authStore";

configure({ enforceActions: "always", });


export class RootStore {
  commonStore: CommonStore;
  authStore: AuthStore;

  counter = 0;
  constructor() {
    makeAutoObservable(this)
    this.commonStore = new CommonStore(this);
    this.authStore = new AuthStore(this);


  }

  @action count = () => {
    console.log(this.counter)
    this.counter++;
  }
}

export const RootStoreContext = createContext(new RootStore());