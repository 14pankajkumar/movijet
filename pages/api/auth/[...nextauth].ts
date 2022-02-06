import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const ClientId: string = `${process.env.GOOGLE_CLIENT_ID}`
const ClientSecret: string = `${process.env.GOOGLE_CLIENT_SECRET}`

interface Props {
  session: any
  token: any
  user: any
}

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: ClientId,
      clientSecret: ClientSecret,
    }),
    // ...add more providers here
  ],

  secret: process.env.secret,

  pages: {
    signIn: "/auth/signin"
  },

  callbacks: {
    async session({ session, token, user }: Props) {
      session.user.username = session.user.name
        .split(" ")
        .join("")
        .toLocaleLowerCase();

      session.user.uid = token.sub;
      return session;
    },
  }
})