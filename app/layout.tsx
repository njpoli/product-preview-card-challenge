import './styles/globals.css'
import type { Metadata } from 'next'
import { Montserrat, Fraunces } from 'next/font/google'
 
export const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
})
 
export const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  weight: '700'
})


export const metadata: Metadata = {
  title: "Frontend Mentor | Product preview card component",
  description: "Created by njpoli",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {  return (
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
