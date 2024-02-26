import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import DetailLink from "./board/DetailLink";
import LoginBtn from "./LoginBtn";
import LogoutBtn from "./LogoutBtn";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  let session = await getServerSession(authOptions);
  //console.log(session);
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="navbar">
          <Link href="/" className="logo">
            Home
          </Link>
          <Link href="/list">List</Link>
          <Link href="/cart">Cart</Link>
          <Link href="/board">Q&A</Link>
          <DetailLink />

          {session ? (
            <span>
              {session.user.name}
              <LogoutBtn />
            </span>
          ) : (
            <LoginBtn />
          )}
        </div>
        {children}
      </body>
    </html>
  );
}
