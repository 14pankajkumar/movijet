import { Session } from "next-auth"
import { JWT } from "next-auth/jwt"

/** Example on how to extend the built-in session types */
declare module "next-auth" {
    interface Session {
        /** This is an example. You can find me in types/next-auth.d.ts */
        user?: {
            name?: string | null;
            email?: string | null;
            image?: string | null;
            username?: string | null;
            uid?: string | null;
        };
        expires: ISODateString;
    }
}

/** Example on how to extend the built-in types for JWT */
declare module "next-auth/jwt" {
    interface JWT {
        /** This is an example. You can find me in types/next-auth.d.ts */
        bar: number
    }
}