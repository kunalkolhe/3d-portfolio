import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kunal Kolhe | Full-Stack Developer",
  description: "Portfolio of Kunal Kolhe, Full-Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jakarta.className} bg-[#0d0d0d] text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
