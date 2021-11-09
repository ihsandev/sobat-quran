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
          <title>{"Qur'an Digital ID"}</title>
          <meta charSet="utf-8" />
          <meta name="og:description" content="Baca Qur'an Online dengan Qur'an Digital Indonesia" />
          <meta name="og:keywords" content="Qur'an Digital Indonesia" />
          <meta property="og:image" content="/images/og_image.png" />  
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link href="https://fonts.googleapis.com/css2?family=Scheherazade:wght@400;700&display=swap" rel="stylesheet" />
          <link 
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" 
            rel="stylesheet" 
          />
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
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