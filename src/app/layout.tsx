"use client"
import {ColorModeScript, UIProvider, defaultConfig} from "@yamada-ui/react"
import {Noto_Sans_JP} from "next/font/google";
import "./globals.css";

const inter = Noto_Sans_JP({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="ja">
      <body className={inter.className}>
        <UIProvider>{children}</UIProvider>
      </body>
    </html>
  );
}