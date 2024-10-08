import type { Metadata } from "next";
import { Merriweather_Sans } from "next/font/google";
import "./globals.css";
import Menu from '@/components/menu'

const merriweatherSans = Merriweather_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abigail Bashore",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={merriweatherSans.className}>
        <Menu />  
        {children}
        <footer className="bg-delft_blue-900 md:fixed md:bottom-0 md:right-0 text-sm">
          <p className="text-center m-2">&copy; Abigail Bashore 2024</p>
        </footer>
      </body>
    </html>
  );
}
