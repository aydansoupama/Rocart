import { createAuthClient } from "better-auth/react"
import { usernameClient, inferAdditionalFields } from "better-auth/client/plugins"
import { auth } from "./auth"

export const authClient = createAuthClient({
    baseURL: "http://localhost:3000",
    plugins: [
        usernameClient(),
        inferAdditionalFields<typeof auth>()
    ]
})