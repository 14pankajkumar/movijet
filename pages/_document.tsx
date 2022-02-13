import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

type Props = {}

class Document extends NextDocument<Props> {
  render() {
    return (
      <Html>
        <Head>
          <meta
            name="google-site-verification"
            content="daBBECnPzbVwLeJlRjBNnedMSacevKNVOP30l52vWbE"
          />
          {/* google adsense */}
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6374059667994234"
            crossOrigin="anonymous"
          ></script>
          <link rel="icon" href="/favicon.ico" key="shortcutIcon" />
          <link
            href="https://vjs.zencdn.net/7.17.0/video-js.css"
            rel="stylesheet"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Philosopher&family=Poppins:ital,wght@0,600;1,500&display=swap"
            rel="stylesheet"
          />
          {/* adsterra */}
          <script
            type="text/javascript"
            src="//pl17017879.trustedcpmrevenue.com/50/ce/f1/50cef132aa49ea6969a9f7c941450832.js"
          ></script>
          <script
            async={true}
            data-cfasync="false"
            src="//pl17018648.trustedcpmrevenue.com/468f7fa593d3c46fb949e12b0a034066/invoke.js"
          ></script>
          <script
            type="text/javascript"
            src="//pl17018699.trustedcpmrevenue.com/38/aa/35/38aa3582b590fd76b5cd01b4c7ed32cd.js"
          ></script>
          <script type="text/javascript">
            {`atOptions = {
              'key' : 'fefa90b006d9a61a726072223dfa2ef2',
              'format' : 'iframe',
              'height' : 60,
              'width' : 468,
              'params' : {}
            };
            document.write('<scr' + 'ipt type="text/javascript" src="http' + (location.protocol === 'https:' ? 's' : '') + '://www.effectivedisplaycontent.com/fefa90b006d9a61a726072223dfa2ef2/invoke.js"></scr' + 'ipt>');`}
          </script>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
