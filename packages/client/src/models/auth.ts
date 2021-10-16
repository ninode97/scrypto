import { IUser } from "./user";


export interface ILoginForm {
    email: string;
    password: string;
}

export interface ILoginResponse {
    jwt: string;
    user: IUser;
}