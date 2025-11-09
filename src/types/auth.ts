import { type User } from "better-auth";

export interface CustomUser extends User {
    username?: string;
    displayUsername?: string;
    referralCode?: string;
}