import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Omni.Monster - One Monster, Every Chain",
  description: "Seamless trustless atomic swaps across the DeFi multiverse. Trade assets across multiple blockchain networks with our cutting-edge cross-chain DEX.",
  keywords: [
    "cross-chain",
    "DEX",
    "atomic swaps",
    "DeFi",
    "blockchain",
    "cryptocurrency",
    "trading",
    "ethereum",
    "bitcoin",
    "cosmos",
    "trustless"
  ],
  authors: [{ name: "Omni.Monster Team" }],
  creator: "Omni.Monster",
  publisher: "Omni.Monster",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://omni.monster'),
  openGraph: {
    title: "Omni.Monster - One Monster, Every Chain",
    description: "Seamless trustless atomic swaps across the DeFi multiverse",
    url: 'https://omni.monster',
    siteName: 'Omni.Monster',
    images: [
      {
        url: '/hero_banner_for_a_cross-chain.png',
        width: 1200,
        height: 630,
        alt: 'Omni.Monster - Cross-Chain DEX',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Omni.Monster - One Monster, Every Chain",
    description: "Seamless trustless atomic swaps across the DeFi multiverse",
    images: ['/hero_banner_for_a_cross-chain.png'],
    creator: '@omni_monster',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}