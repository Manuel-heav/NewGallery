import "~/styles/globals.css";
import "@uploadthing/react/styles.css";

import { ClerkProvider } from "@clerk/nextjs";
import { Inter }  from "next/font/google";
import Navbar from "./_components/Navbar";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";
import React from "react";

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
  modal
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <ClerkProvider>
    <html lang="en">
    <NextSSRPlugin
          routerConfig={extractRouterConfig(ourFileRouter)}
        />
      <body className={`font-sans ${inter.variable} flex flex-col gap-4`}>
        <Navbar />
        {children}
        {modal}
        <div id="modal-root"/>
      </body>
    </html>
    </ClerkProvider>
  );
}
