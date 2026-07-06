import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Audio Infinite",
  description:
    "Studio-grade audio equipment designed for professionals and enthusiasts. From monitors to microphones, we deliver excellence in every product.",
};

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;