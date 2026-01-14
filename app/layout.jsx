import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GlobalBackground from "@/components/GlobalBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MT7.in",
  description: "One Stop Solution for all your Services Needs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative bg-black text-white`}
      >
        {/* 🔥 GLOBAL ANIMATED BACKGROUND */}
        <GlobalBackground />

        {/* 🧱 APP CONTENT */}
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
