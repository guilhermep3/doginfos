import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "DogsInfos",
  description: "Informações sobre cachorros",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`antialiased`}
      >
        {children}
        <Footer/>
      </body>
    </html>
  );
}
