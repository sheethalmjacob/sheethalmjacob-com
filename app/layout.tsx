import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Nunito_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-display",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Sheethal Jacob — Service Designer",
  description: "Service design practice built on research and strategy.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${nunitoSans.variable}`}>
      <body>
        <Nav />
        <main style={{ paddingTop: "56px" }}>
          {children}
        </main>
      </body>
    </html>
  );
}