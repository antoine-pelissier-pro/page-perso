import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const cabinet = localFont({
  src: [
    { path: "./CabinetGrotesk-Medium.woff2", weight: "500", style: "normal" },
    { path: "./CabinetGrotesk-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-cabinet",
});

export const metadata: Metadata = {
  title: "Antoine",
  description: "Page personnelle d'Antoine",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${cabinet.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}