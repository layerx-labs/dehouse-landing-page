import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const title = "DeHouse";
const description = "The first web3 hub in Portugal";
const og = "/dehouse-og.jpg";

export const metadata = {
  title: title,
  description: description,
  keywords: "web3, crypto, hub, cowork, cowork space, hacker space",
  openGraph: {
    url: "https://dehouse.org",
    title: title,
    description: description,
    type: "website",
    locale: "en-US",
    images: [
      {
        url: og,
        width: 1280,
        height: 720,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    creator: "@DeHouseDAO",
    site: "@DeHouseDAO",
    images: [og],
  },
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.svg" }],
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
  },
  authors: [{ name: "LayerX", url: "https://layerx.xyz" }],
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        {/* <head /> */}
        <body className={inter.className}>{children}</body>
      </html>
    </>
  );
}
