import '@/styles/globals.css';
import '@/styles/app.css';
import '@/styles/bulma.css';

import Footer from '@/components/Footer'
import Script from 'next/script';

export const metadata = {
  title: 'Simon Ugorji (Octagon): Your favourite Software Developer ✨',
  description: 'Simon is an experienced web developer with a track record of collaborating with businesses to create top-quality software solutions, backed by relevant certifications. Additionally, he is a dedicated technical writer, sharing valuable content on platforms like Medium, Hashnode, and Dev.to, with a monthly readership of over 10,000 views. Presently, Simon is a key player in a promising fintech startup, where he combines his development skills and writing prowess to drive innovation in the realm of financial technology. His mission is to empower businesses in the digital era while actively contributing to the tech community\'s knowledge and growth.',
  openGraph: {
    title: 'Simon Ugorji (Octagon): Your favourite Software Developer ✨',
    description: 'Simon is an experienced web developer with a track record of collaborating with businesses to create top-quality software solutions, backed by relevant certifications. Additionally, he is a dedicated technical writer, sharing valuable content on platforms like Medium, Hashnode, and Dev.to, with a monthly readership of over 10,000 views. Presently, Simon is a key player in a promising fintech startup, where he combines his development skills and writing prowess to drive innovation in the realm of financial technology. His mission is to empower businesses in the digital era while actively contributing to the tech community\'s knowledge and growth.',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script defer="true" src="/octavalidate.js" />
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-G8TW41FQR2`}
      />

      <Script strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-G8TW41FQR2', {
          page_path: window.location.pathname,
          });
        `}
      </Script>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  )
}
