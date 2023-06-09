import React from 'react'
import { NextSeo } from 'next-seo'
import config from './config'

interface Props {
  image?: string
  desc?: string
  path?: string
  title?: string
  date?: string
  updated?: string
}

const Seo = ({ title, desc, image, path, date, updated }: Props) => {
  const {
    title: configTitle,
    description: configDescription,
    image: configImage,
    url,
    author,
    twitter,
  } = config

  const seo = {
    description: desc || configDescription,
    image: image ? `${url}${image}` : configImage,
    title: `${title} - ${configTitle}` || configTitle,
    url: `${url}${path || ''}`,
    date: date,
    updated: updated || date,
  }

  const formattedDate = seo.date ? new Date(seo.date).toISOString() : ''
  const formattedUpdatedDate = seo.updated
    ? new Date(seo.updated).toISOString()
    : ''
  const featuredImage = {
    url: seo.image,
    alt: seo.title,
  }

  return (
    <React.Fragment>
      <NextSeo
        title={seo.title}
        description={seo.description}
        canonical={seo.url}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: formattedDate,
            modifiedTime: formattedUpdatedDate,
          },
          url: seo.url,
          title: seo.title,
          description: seo.description,
          images: [featuredImage],
        }}
        twitter={{
          handle: twitter,
          site: twitter,
          cardType: 'summary_large_image',
        }}
      />
    </React.Fragment>
  )
}

export { Seo }
