import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Your Free Resource | Elevative",
  description:
    "Watch a free framework on assertive communication from Mariana Marcano — then book your free 30-min leadership call.",
  openGraph: {
    title: "Your Free Resource | Elevative",
    description:
      "Watch a free framework on assertive communication from Mariana Marcano — then book your free 30-min leadership call.",
    siteName: "Elevative",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-inter bg-white text-near-black antialiased">
        {children}
      </body>
    </html>
  );
}
