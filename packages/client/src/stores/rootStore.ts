import { createContext } from "react";
import { action, configure, makeAutoObservable } from "mobx";
import CommonStore from "./commonStore";
import AuthStore from "./authStore";
import { PartnerStore } from "./partnerStore";

configure({ enforceActions: "always", });


export class RootStore {
  commonStore: CommonStore;
  authStore: AuthStore;
  partnerStore: PartnerStore;

  constructor() {
    makeAutoObservable(this)
    this.commonStore = new CommonStore(this);
    this.authStore = new AuthStore(this);
    this.partnerStore = new PartnerStore(this);


  }
}

export const RootStoreContext = createContext(new RootStore());