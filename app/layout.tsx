import "./styles/globals.css";
import type { Metadata } from "next";
import { fraunces } from "./styles/fonts";

export const metadata: Metadata = {
  title: "Frontend Mentor | Product preview card component",
  description: "Created by njpoli",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        ></link>
        <meta
          content="Product Preivew Card Challenge by Frontend Mentor"
          name="description"
        />
      </head>
      <body className={`${fraunces.className} bg-[--colors-cream]`}>
        {children}
      </body>
    </html>
  );
}
