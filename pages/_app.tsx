import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'
import { SessionProvider } from 'next-auth/react'

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) => {
  return (
    <>
      {/* Global site tag (gtag.js) - Google Analytics */}
      <Script
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-SQVCR9TMP8"
      />

      <Script strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
               gtag('js', new Date());
            
               gtag('config', '${process.env.NEXT_PUBLIC_GA_KEY}');
          `}
      </Script>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  )
}

export default MyApp
