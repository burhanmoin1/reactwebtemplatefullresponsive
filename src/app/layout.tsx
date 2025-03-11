import type { Metadata } from "next";
import { Crete_Round, Roboto, Open_Sans } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { StoreProvider } from "./redux/StoreProvider";

const crete = Crete_Round({
  subsets: ["latin"],
  weight: "400",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"], // Include multiple weights if needed
});

const opensans = Open_Sans({
  subsets: ["latin"],
  weight: ["300" , "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Pensel",
  description: "you're the artist",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProvider>
      <StoreProvider>
      <html lang="en">
      <body className={`${crete.className}`}>{children}</body>
      </html>
      </StoreProvider>
    </SessionProvider>
  );
}
