import { RootStore } from "./rootStore";
import { observable, action, reaction } from "mobx";
const env: ImportMetaEnv = import.meta.env;

export default class CommonStore {
    rootStore: RootStore;
    env: ImportMetaEnv;

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
        this.env = env;
    }

   token: string | null = window.localStorage.getItem("accessToken");
   appLoaded = false;
   isLoading = false;
   loadingMessage = "";

    setToken = (token: string) => {
        this.token = token;
        localStorage.setItem("accessToken", token);
    };

    clearToken = () => {
        localStorage.removeItem("accessToken");
    };

    setAppLoaded = () => {
        this.appLoaded = true;
    };
}