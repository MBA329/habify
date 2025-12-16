import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


import { SidebarProvider,SidebarTrigger } from "@/components/ui/sidebar";
import {AppSidebar} from "@/components/app-sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Habify",
  description: "Track your habits effortlessly with Habify.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar/>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >

          <div className="min-w-screen h-10"></div>
          <SidebarTrigger/>
          {children}
        </body>
      </html>
    </SidebarProvider>
  );
}
