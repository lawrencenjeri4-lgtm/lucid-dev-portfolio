import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lucid Dev",
  description:
    "Official Lucid Dev portfolio — projects, software, communities, and developer work.",
};

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
