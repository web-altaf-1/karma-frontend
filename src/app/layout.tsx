import type { Metadata } from "next";
import '@/app/styles/main.css';

export const metadata: Metadata = {
  title: "Karmasangsthan",
  description: "Karmasangsthan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
