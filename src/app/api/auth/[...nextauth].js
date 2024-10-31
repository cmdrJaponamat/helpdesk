import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth ({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize ( credentials, req ) {
        const res = await fetch( "/api/login" , {
          method: 'POST',
          body: JSON.stringify( credentials ),
          headers: { "Content-type": "application/json" }
        });
        const user = await res.json();
        if ( res.ok && user ) { 
          return user;
        }

        return null;
      }
    })
  ],
})
