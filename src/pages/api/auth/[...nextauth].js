import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

export const authOptions = {

  pages:{
    singIn: "http://localhost:3000/"
  },
  
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {

        console.log("this is your credentials", credentials);

        try {
          const response = await axios.post(process.env.NEXT_PUBLIC_CLOUD_API_ENDPOINT + '/auth/login', {
              username: credentials.username,
              password: credentials.password,
              type: 'admin',
            })
          
          console.log("this is response", response.data);
            
          if(response){
              return response;
          }else{
            return null;
          }
  
        }catch (error) {
            console.log(error);
          }
      }
    })
  ]
}

export default NextAuth(authOptions);