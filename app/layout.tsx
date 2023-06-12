import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Title } from "./components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Simple Blog",
  description: "A simple blog built with Next.js and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-200 text-slate-900`}>
        <Header />

        <main className="px-4 mb-10">
          <Title />
          {children}
        </main>
      </body>
    </html>
  );
}
