import NextAuth, { AuthOptions } from 'next-auth';
import prisma from '@/app/libs/prismadb';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'email' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials) {
        // check to see if credentials are there
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Invalid credentials NEXTAUTH ERROR');
        }

        // check to see if user exist
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        // if no user found
        if (!user || !user?.hashedPassword) {
          throw new Error('No user found NEXTAUTH ERROR');
        }

        // compare passwords
        const passwordMatch = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );

        // if the password does not match
        if (!passwordMatch) {
          throw new Error('Incorrect password NEXTAUTH ERROR');
        }

        return user;
      },
    }),
  ],
  debug: process.env.NODE_ENV === 'development',
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST};
