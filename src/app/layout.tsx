"use client"
import {ColorModeScript, UIProvider, defaultConfig} from "@yamada-ui/react"

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <UIProvider>
          <ColorModeScript initialColorMode={defaultConfig.initialColorMode} />
          {children}
      </UIProvider>
  );
}