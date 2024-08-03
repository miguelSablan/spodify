import NextAuth, { NextAuthOptions } from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";

const options: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  providers: [
    SpotifyProvider({
      authorization:
        "https://accounts.spotify.com/authorize?scope=playlist-read-private,user-read-recently-played,user-top-read,user-follow-read,user-read-currently-playing,user-library-read,playlist-modify-private,playlist-modify-public,user-library-modify,user-library-read,playlist-read-collaborative",
      clientId: process.env.SPOTIFY_CLIENT_ID!,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.access_token = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        token,
      };
    },
  },
};

const handler = NextAuth(options);

export { handler as GET, handler as POST };
