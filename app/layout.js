import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TestValley",
  description: "TestValley: Shop now",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-white"}>{children}</body>
    </html>
  );
}
