import type { Metadata } from "next";
import "./globals.css";
import TransitionProvider from "@/components/ui/TransitionProvider";

export const metadata: Metadata = {
  title: "Abdalrhman Aboalela",
  description: "Abdalrhman Aboalela Professional Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
