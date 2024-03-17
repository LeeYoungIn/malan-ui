import { Metadata } from 'next'

export function getMetadata({ title, description }: { title: string, description: string }, etc?: Partial<Metadata>): Metadata {
  return {
    metadataBase: new URL('https://malan.kr'),
    title, description,
    openGraph: {
      title, description,
      // url: 'http://minzuukim.com/work/giver/01_main.html',
      // images: 'https://wreathimage.s3.ap-northeast-2.amazonaws.com/thumbnail.png',
      type: 'website'
    },
    icons: {
      shortcut: '/favicon.ico'
    },
    alternates: {
      // canonical: 'https://www.giver.gift'
    },
    ...etc
  }
}