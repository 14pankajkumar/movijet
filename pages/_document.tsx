import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

type Props = {}

class Document extends NextDocument<Props> {
  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/favicon.png" key="shortcutIcon" />
          <link rel="manifest" href="/manifest.json" />
          <link
            href="https://vjs.zencdn.net/7.17.0/video-js.css"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="https://vjs.zencdn.net/7.17.0/video.min.js"></script>
        </body>
      </Html>
    )
  }
}

export default Document
