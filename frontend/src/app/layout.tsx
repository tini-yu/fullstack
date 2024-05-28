import '@/styles/index.scss';

import { Alegreya } from 'next/font/google';
import { Roboto } from 'next/font/google';
import localFont from 'next/font/local';

import "bootstrap/dist/css/bootstrap.min.css"

// import Footer from '@/components/Footer';
// import Header from '@/components/Header';

const lato = localFont({
  src: [
    {
      path: '../../public/fonts/Lato-Regular.ttf',
      weight: '400'
    },
    {
      path: '../../public/fonts/Lato-Bold.ttf',
      weight: '700'
    }
  ],
  variable: '--font-lato',
  display: 'swap',
})

import type { Metadata } from "next";

//import ReactQueryProvider from '@/providers/react-query';

const alegreya = Alegreya({
    subsets: ['cyrillic'],
    variable: '--font-alegreya',
    display: 'swap',
});

const roboto = Roboto({
    subsets: ['cyrillic'],
    weight: ['400', '700'],
    variable: '--font-roboto',
    display: 'swap',
});

export const metadata: Metadata = {
    title: "Интернет Магазин Техники",
    description: "Проект",
};

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="ru" className={`${lato.variable}`}>
        <head>
          <meta charSet="utf-8"></meta>
          <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossOrigin="anonymous"></link>
        </head>
        <body>
          {children}
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous"></script>
        </body>
      </html>
    )
  }
// export default function RootLayout({
//     children,
// }: Readonly<{
//     children: React.ReactNode;
// }>) {
//     return (
//         <html lang="ru" className={`${alegreya.variable} ${roboto.variable}`}>
//             <body className="wrapper">
//                 <ReactQueryProvider>
//                     <Header />
//                     <main>{children}</main>
//                     <Footer />
//                 </ReactQueryProvider>
//             </body>
//         </html>
//     );
// }
