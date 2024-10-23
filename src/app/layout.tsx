import type { Metadata } from "next";
import localFont from "next/font/local";
import { Fresca } from "next/font/google";
import "./globals.css";

const fresca = Fresca({ weight: "400", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Gilbert Garcia",
  description: "Dev Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fresca.className} antialiased scroll-smooth`}>
        {children}
      </body>
    </html>
  );
}
