import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anuj Jha | Full Stack Developer",
  description:
    "Portfolio of Anuj Jha, a Final-year CSE student and Full Stack Developer specializing in MERN Stack, Next.js, React, Node.js and scalable web applications.",
  keywords: [
    "Anuj Jha",
    "Portfolio",
    "Full Stack Developer",
    "MERN Stack",
    "React",
    "Next.js",
    "Software Engineer",
  ],
  authors: [{ name: "Anuj Jha" }],
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-[#050505] text-gray-300 antialiased overflow-x-hidden selection:bg-orange-500/30 selection:text-orange-200`}
      >
        {children}
      </body>
    </html>
  );
}