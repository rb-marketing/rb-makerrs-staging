import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google Fonts preconnect — stylesheet loaded async (non-render-blocking) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* dns-prefetch for deferred third-party scripts (not preconnect — they load after interaction) */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://salesiq.zohopublic.com" />
        <link rel="dns-prefetch" href="https://crmplus.zoho.com" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body className="cursor-none">
        <Main />
        <NextScript />

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PGLSQTH"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        {/* Load Google Fonts async — avoids render-blocking the initial paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var l=document.createElement('link');l.rel='stylesheet';l.href='https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Open+Sans:wght@300;400;500;600;700&display=swap';document.head.appendChild(l);})();`
          }}
        />

        {/* <script
          id="ruttl-site-embed-script"
          src="https://app.ruttl.com/plugin.js?id=tE3kcRBcvSLsdS8ETeVO&e=1"
          defer
          async
        ></script> */}
      </body>
    </Html>
  )
}
