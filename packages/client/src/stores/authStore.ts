import { RootStore } from "./rootStore";
import { observable, action, reaction } from "mobx";

export default class AuthStore {
    rootStore: RootStore;
    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;

    }
}