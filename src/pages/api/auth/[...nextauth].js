import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "email", placeholder: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        
      }
    })
  ]
}

export default NextAuth(authOptions);