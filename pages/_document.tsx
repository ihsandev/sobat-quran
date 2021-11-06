/* eslint-disable @next/next/no-title-in-document-head */
/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line @next/next/no-document-import-in-page
import React from 'react'
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <title>Sobat Qur'an</title>
          <link href="https://fonts.googleapis.com/css2?family=Scheherazade:wght@400;700&display=swap" rel="stylesheet" />
          <link 
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" 
            rel="stylesheet" 
          />
          <link rel='manifest' href='/manifest.json' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument