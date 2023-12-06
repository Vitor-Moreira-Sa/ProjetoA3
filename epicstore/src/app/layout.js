import { Inter } from "next/font/google";
import "./global.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Epic Store",
  description: "Loja de midias virtuais",
};

export default function Layout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
