import { betterAuth } from "better-auth";
import { username } from "better-auth/plugins";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
  },
  user: {
    additionalFields: {
      username: { type: "string", required: true, unique: true },
      displayUsername: { type: "string", required: false },
      referralCode: { type: "string", required: false },
    },
  },
  socialProviders: {
    google: {
      prompt: "select_account",
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,

      mapProfileToUser: (profile) => ({
        username:
          profile.email?.split("@")[0] +
            `#${Math.floor(Math.random() * 10000)
              .toString()
              .padStart(4, "0")}` || "",
        displayUsername: profile.name.toLowerCase().replace(/\s+/g, "."),
      }),
    },
  },
  plugins: [username()],
});