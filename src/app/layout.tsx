import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ceylon Naturalist",
  description: "Bird watching and wildlife tours in Sri Lanka",
  keywords: "Ceylon Naturalist,Bird watching tours in Sri Lanka, Bird watching in Sri Lanka, Wildlife tours in Sri Lanka, Sri Lanka, Nature tours, Eco tourism, Adventure travel, Sri lanka Photography tours",
  icons: {
    icon: [
      { url: '/images/Round.svg', sizes: 'any' }
    ],
    apple: [
      { url: '/images/Round.svg', sizes: '90x90' }
    ],
    shortcut: [
      { url: '/images/Round.svg' }
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}