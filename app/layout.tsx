import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quicker",
  description: "Gmail Spend Intelligence dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <a
          href="#main-content"
          className="absolute left-0 top-0 -translate-y-full focus:translate-y-0 bg-blue-600 text-white p-3 z-50 transition-transform focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-medium rounded-br-md"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
