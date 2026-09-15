import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import './hero-fix.css';
import './logo-size.css';
import './background-remover/background-remover.css';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata: Metadata = { title: { default: 'Image Resizer Tools — Free Image Tools', template: '%s | Image Resizer Tools' }, description: 'Free, private image tools that work right in your browser.', metadataBase: new URL('https://imageresizertools.example') };

export default function RootLayout({children}:{children:React.ReactNode}) {
  const structuredData={"@context":"https://schema.org","@graph":[{"@type":"WebSite","name":"Image Resizer Tools","url":"https://imageresizertools.example/"},{"@type":"WebApplication","name":"Image Resizer Tools","applicationCategory":"MultimediaApplication","operatingSystem":"Web Browser","url":"https://imageresizertools.example/"}]};
  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-6510526077579781" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6510526077579781" crossOrigin="anonymous"></script>
      </head>
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PQ4DQS3M3M5"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PQ4DQS3M3M5');
          `}
        </Script>
        <Header />
        {children}
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData)}}/>
      </body>
    </html>
  );
}



