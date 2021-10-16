import { RootStore } from "./rootStore";
import { observable, action, reaction } from "mobx";

export default class AuthStore {
    rootStore: RootStore;
    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;

    }


    @action login = () => {
        alert('login')
    };

    @action logout = () => {
        alert('logout')
    };

    @action current = () => {
        alert('current')
    };
}