import "~/styles/globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { Inter }  from "next/font/google";
import Navbar from "./_components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata = {
  title: "New Gallery",
  description: "A new gallery for the modern web",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`font-sans ${inter.variable} flex flex-col gap-4`}>
        <Navbar />
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
