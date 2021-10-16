import { RootStore } from "./rootStore";
import { observable, action, reaction } from "mobx";

export default class CommonStore {
    rootStore: RootStore;
    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;

    }

    @observable token: string | null = window.localStorage.getItem("accessToken");
    @observable appLoaded = false;
    @observable isLoading = false;
    @observable loadingMessage = "";

    @action setToken = (token: string) => {
        this.token = token;
        localStorage.setItem("accessToken", token);
    };

    @action clearToken = () => {
        localStorage.removeItem("accessToken");
    };

    @action setAppLoaded = () => {
        this.appLoaded = true;
    };
}