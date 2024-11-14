import type { Metadata } from "next";
import "./globals.css";
import Cabecalho from "./components/Cabacalho/Cabecalho";
import Rodape from "./components/Rodape/Rodape";


export const metadata: Metadata = {
  title: "LIGHT AND LIFE ",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Cabecalho/>
        {children}
        <Rodape/>
      </body>
    </html>
  );
}
