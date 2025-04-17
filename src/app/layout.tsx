import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavigationDock } from "@/components/navigation-dock";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "GravityGym - Work with Professionals",
  description: "Professional fitness training and gym services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased bg-black text-white`}>
        {children}
        <NavigationDock />
      </body>
    </html>
  );
}
