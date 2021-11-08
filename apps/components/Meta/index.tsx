/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head'

export default function MetaTag() {
  return (
    <Head>
      <title>{"Sobat Qur'an"}</title>
      <meta charSet="utf-8" />
      <meta name="og:viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
      <meta name="og:description" content="Baca Qur'an Online dengan Sobat Qur'an" />
      <meta name="og:keywords" content="Sobat Quran, Baca Qur'an Online" />
      <meta property="og:image" content="/icons/icon-512x512.png" />  
      <link href="https://fonts.googleapis.com/css2?family=Scheherazade:wght@400;700&display=swap" rel="stylesheet" />
      <link 
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" 
        rel="stylesheet" 
      />
      <link rel='manifest' href='/manifest.json' />
    </Head>
  )
}