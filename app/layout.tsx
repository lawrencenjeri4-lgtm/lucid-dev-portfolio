import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.com"),

  title: {
    default: "Lucid Dev — Developer & Builder",
    template: "%s | Lucid Dev",
  },

  description:
    "Lucid Dev is the official portfolio of a developer building software, automation tools, digital products and communities.",

  keywords: [
    "Lucid Dev",
    "Lucid Developer",
    "software developer",
    "web developer",
    "automation",
    "Kenya-Ultra",
  ],

  authors: [{ name: "Lucid Dev" }],
  creator: "Lucid Dev",
  publisher: "Lucid Dev",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    title: "Lucid Dev — Developer & Builder",
    description:
      "Official Lucid Dev portfolio, projects and online communities.",
    siteName: "Lucid Dev",
  },

  twitter: {
    card: "summary_large_image",
    title: "Lucid Dev — Developer & Builder",
    description:
      "Official Lucid Dev portfolio, projects and online communities.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
  }
