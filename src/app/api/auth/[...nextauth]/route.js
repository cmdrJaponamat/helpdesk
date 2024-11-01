import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth ({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize ( credentials, req ) {
        const url = req.host + '/api/auth/login/';
        console.log('************NEXTAUTH endpoint url: '+ url);
        const res = await fetch( 'http://localhost:3000/api/auth/login' , {
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
  ]
//  callbacks: {
//    async redirect({ url, baseUrl }) {
//      baseUrl = 'http://10.10.30.14:3000'
//      console.log(typeof baseUrl);
//      console.log('our callback: ' + url+ ' '+ baseUrl);
//      const localUrl = new URL('http://10.10.30.14:3000/api/auth/callback/credentials').origin;
//      return localUrl;
//    }
//  }  
});
 
export { handler as GET, handler as POST }
